import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ActivoService } from '../services/activo';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class DashboardPage implements OnInit {

  equiposAsignados: { codigo: string; asignadoA: string }[] = [];
  equiposDevueltos: { codigo: string; devueltoDe: string }[] = [];

  usuariosRegistrados: {
    nombre: string;
    correo: string;
    departamento: string;
  }[] = [];

  constructor(
    public router: Router,
    private alertController: AlertController,
    private activoService: ActivoService,
    private apiService: ApiService
  ) {}

  ngOnInit() {

    this.activoService.historial$.subscribe(historial => {

      this.equiposAsignados = historial
        .filter(h => h.estado === 'Asignado')
        .slice(0, 5)
        .map(a => ({
          codigo: a.codigo,
          asignadoA: a.asignado || '—'
        }));

      this.equiposDevueltos = historial
        .filter(h => h.estado === 'Devuelto')
        .slice(0, 5)
        .map(d => ({
          codigo: d.codigo,
          devueltoDe: d.asignado || '—'
        }));
    });

    this.apiService.getUsuarios().subscribe(data => {
      this.usuariosRegistrados = data.map(u => ({
        nombre: u.name,
        correo: u.email,
        departamento: u.company?.name || 'Sin departamento'
      }));
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Cerrar sesión', handler: () => this.router.navigate(['/login']) }
      ]
    });
    await alert.present();
  }
}
