import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivoService } from '../services/activo';

import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    HistorialTableComponent  // ← usamos el componente global
  ],
})
export class InventarioPage {
  
  historialAcciones: any[] = [];

  constructor(
    public router: Router,
    private activoService: ActivoService
  ) {}

  ngOnInit() {
    // Nos suscribimos al historial del servicio
    this.activoService.historial$.subscribe(h => {
      this.historialAcciones = h;
    });
  }

  logout() {
    this.router.navigate(['/login']);
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
