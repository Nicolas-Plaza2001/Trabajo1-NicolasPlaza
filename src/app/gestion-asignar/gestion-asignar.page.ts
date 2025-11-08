import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-asignar',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './gestion-asignar.page.html',
  styleUrls: ['./gestion-asignar.page.scss']
})
export class GestionAsignarPage {
  equipo = [
    { codigo: 'TC-00003', serial: 'SN003', modelo: 'Laptop C' }
  ];

  constructor(public router: Router) {}

  logout() {
    // Lógica de cerrar sesión
    this.router.navigate(['/login']);
  }

  asignar() {
    // Acción demo: redirigir a la página de gestión
    this.router.navigate(['/gestion-asignar-finish']);
  }
}
