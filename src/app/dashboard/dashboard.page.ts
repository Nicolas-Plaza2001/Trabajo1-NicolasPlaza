import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ActivoService } from '../services/activo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class DashboardPage {
  equiposAsignados: { codigo: string; asignadoA: string }[] = [];
  equiposDevueltos: { codigo: string; devueltoDe: string }[] = [];

  constructor(public router: Router, private alertController: AlertController, private activoService: ActivoService) {}

  ngOnInit() {
    this.activoService.historial$.subscribe(h => {
      const asignados = h.filter(x => x.estado === 'Asignado');
      const devueltos = h.filter(x => x.estado === 'Devuelto');

      this.equiposAsignados = asignados.slice(0, 5).map(a => ({ codigo: a.codigo, asignadoA: a.asignado || '—' }));
      this.equiposDevueltos = devueltos.slice(0, 5).map(d => ({ codigo: d.codigo, devueltoDe: d.asignado || '—' }));
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'secondary' },
        { text: 'Sí, cerrar sesión', handler: () => this.router.navigate(['/login']) }
      ]
    });
    await alert.present();
  }
}
