import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-actualizar-equipo',
  templateUrl: './inventario-actualizar-equipo.page.html',
  styleUrls: ['./inventario-actualizar-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class InventarioActualizarEquipoPage {
  public codigo: string = '';
  public serial: string = '';
  public modelo: string = '';
  public cpu: string = '';
  public ram: string = '';
  public almacenamiento: string = '';

  constructor(public router: Router) {}

  actualizarEquipo() {
    console.log('Equipo actualizado:', {
      codigo: this.codigo,
      serial: this.serial,
      modelo: this.modelo,
      cpu: this.cpu,
      ram: this.ram,
      almacenamiento: this.almacenamiento
    });

    // Redirigir a inventario tras actualizar
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
