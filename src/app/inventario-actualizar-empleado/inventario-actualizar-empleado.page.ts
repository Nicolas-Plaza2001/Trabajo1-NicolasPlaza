import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-actualizar-empleado',
  templateUrl: './inventario-actualizar-empleado.page.html',
  styleUrls: ['./inventario-actualizar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class InventarioActualizarEmpleadoPage {
  public nombre: string = '';
  public departamento: string = '';
  public correo: string = '';

  constructor(public router: Router) {}

  actualizarEmpleado() {
    console.log('Empleado actualizado:', {
      nombre: this.nombre,
      departamento: this.departamento,
      correo: this.correo
    });

    // Redirigir al inventario tras actualizar
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
