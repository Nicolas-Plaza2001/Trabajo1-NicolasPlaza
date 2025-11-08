import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class DashboardPage {
  equiposAsignados = [
    { codigo: 'TC-00001', asignadoA: 'Juan Pérez' },
    { codigo: 'TC-00002', asignadoA: 'María López' },
  ];

  equiposDevueltos = [
    { codigo: 'TC-00003', devueltoDe: 'Carlos Soto' },
    { codigo: 'TC-00004', devueltoDe: 'Ana Torres' },
  ];

  constructor(public router: Router, private alertController: AlertController) {}

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
