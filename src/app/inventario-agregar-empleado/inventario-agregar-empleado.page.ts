import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario-agregar-empleado',
  templateUrl: './inventario-agregar-empleado.page.html',
  styleUrls: ['./inventario-agregar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InventarioAgregarEmpleadoPage {
  public nombre: string = '';
  public departamento: string = '';
  public correo: string = '';

  constructor(public router: Router) {}

  generarQR() {
    this.router.navigate(['/inventario-agregar-empleado-finish']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
