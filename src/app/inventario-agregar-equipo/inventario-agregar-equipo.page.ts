import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-agregar-equipo',
  templateUrl: './inventario-agregar-equipo.page.html',
  styleUrls: ['./inventario-agregar-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class InventarioAgregarEquipoPage {
  public codigo: string = '';
  public serial: string = '';
  public modelo: string = '';
  public cpu: string = '';
  public ram: string = '';
  public almacenamiento: string = '';

  constructor(public router: Router) {}

  generarQR() {
    console.log('Equipo agregado:', {
      codigo: this.codigo,
      serial: this.serial,
      modelo: this.modelo,
      cpu: this.cpu,
      ram: this.ram,
      almacenamiento: this.almacenamiento
    });

    // Redirigir a la página de finalización
    this.router.navigate(['/inventario-agregar-equipo-finish']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
