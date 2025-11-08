import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage {
  historial = [
    { codigo: 'TC-0001', asignado: 'Juan Pérez', estado: 'Asignado' },
    { codigo: 'TC-0002', asignado: '', estado: 'Devuelto' }
  ];

  constructor(public router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  asignarActivo() {
    this.router.navigate(['/gestion-asignar']);
  }

  devolverActivo() {
    this.router.navigate(['/gestion-devolver']);
  }
}
