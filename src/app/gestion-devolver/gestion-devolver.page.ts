import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-devolver',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './gestion-devolver.page.html',
  styleUrls: ['./gestion-devolver.page.scss']
})
export class GestionDevolverPage {
  equipo = [
    { codigo: 'TC-00001', serial: 'SN001', modelo: 'Laptop A' },
    { codigo: 'TC-00002', serial: 'SN002', modelo: 'Monitor B' }
  ];

  colaborador = [
    { nombre: 'Juan Pérez', departamento: 'TI', correo: 'juan.perez@empresa.com' },
    { nombre: 'María López', departamento: 'RRHH', correo: 'maria.lopez@empresa.com' }
  ];

  constructor(public router: Router) {}

  logout() {
    // Aquí va la lógica de cerrar sesión
    this.router.navigate(['/login']);
  }

  devolver() {
    // Acción demo: redirigir a la página de gestión
    this.router.navigate(['/gestion']);
  }
}
