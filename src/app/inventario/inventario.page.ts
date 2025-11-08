import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  standalone: true,
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class InventarioPage {
  constructor(public router: Router) {}

  historialAcciones = [
    { accion: 'Agregado', codigo: 'TC-0001', empleado: 'Carlos López', fecha: '2025-11-08' },
    { accion: 'Actualizado', codigo: 'TC-0002', empleado: 'María Torres', fecha: '2025-11-07' },
    { accion: 'Eliminado', codigo: 'TC-0003', empleado: 'Pedro Díaz', fecha: '2025-11-06' },
  ];

  logout() {
    this.router.navigate(['/login']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToGestion() {
    this.router.navigate(['/gestion']);
  }

  goToBuscar() {
    this.router.navigate(['/buscar']);
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  goToAgregarEquipo() {
    this.router.navigate(['/inventario-agregar-equipo']);
  }

  goToAgregarEmpleado() {
    this.router.navigate(['/inventario-agregar-empleado']);
  }

  goToActualizarEquipo() {
    this.router.navigate(['/inventario-actualizar-equipo']);
  }

  goToActualizarEmpleado() {
    this.router.navigate(['/inventario-actualizar-empleado']);
  }

  goToEliminarEquipo() {
    this.router.navigate(['/inventario-eliminar-equipo']);
  }

  goToEliminarEmpleado() {
    this.router.navigate(['/inventario-eliminar-empleado']);
  }
}
