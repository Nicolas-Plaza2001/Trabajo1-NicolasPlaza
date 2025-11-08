import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-eliminar-empleado',
  templateUrl: './inventario-eliminar-empleado.page.html',
  styleUrls: ['./inventario-eliminar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class InventarioEliminarEmpleadoPage {
  public correoEmpleado: string = '';

  constructor(public router: Router) {}

  eliminarEmpleado() {
    console.log('Empleado eliminado:', this.correoEmpleado);
    // Aquí iría la lógica real de eliminación.
    // Por ahora solo redirige al inventario.
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
