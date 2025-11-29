import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivoService } from '../services/activo';

@Component({
  selector: 'app-gestion-devolver',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './gestion-devolver.page.html',
  styleUrls: ['./gestion-devolver.page.scss']
})
export class GestionDevolverPage {
  codigo: string = '';

  equipo = [
    { codigo: 'TC-00001', serial: 'SN001', modelo: 'Laptop A' },
    { codigo: 'TC-00002', serial: 'SN002', modelo: 'Monitor B' }
  ];

  colaborador = [
    { nombre: 'Juan Pérez', departamento: 'TI', correo: 'juan.perez@empresa.com' },
    { nombre: 'María López', departamento: 'RRHH', correo: 'maria.lopez@empresa.com' }
  ];

  constructor(
    public router: Router,
    private activoService: ActivoService
  ) {}

  logout() {
    this.router.navigate(['/login']);
  }

  devolver() {
    if (!this.codigo) {
      // opcional: mostrar alerta
      return;
    }

    // registrar devolución en el servicio
    this.activoService.devolverActivo(this.codigo);

    // volver a gestión para visualizar el cambio
    this.router.navigate(['/gestion']);
  }
}
