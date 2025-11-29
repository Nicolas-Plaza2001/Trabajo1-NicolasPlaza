import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario-eliminar-empleado',
  templateUrl: './inventario-eliminar-empleado.page.html',
  styleUrls: ['./inventario-eliminar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HistorialTableComponent]
})
export class InventarioEliminarEmpleadoPage {
  public correoEmpleado: string = '';
  public historialAcciones: any[] = []; // historial local

  constructor(public router: Router, private toastCtrl: ToastController) {}

  async eliminarEmpleado() {
    if (!this.correoEmpleado.trim()) {
      this.showToast('Ingrese un correo válido', 'warning');
      return;
    }

    // Agregar al historial local
    this.historialAcciones.unshift({
      accion: 'Eliminó empleado',
      correo: this.correoEmpleado,
      estado: 'Eliminado'
    });

    this.showToast(`Empleado ${this.correoEmpleado} eliminado`, 'success');

    // Limpiar input
    this.correoEmpleado = '';
  }

  async showToast(message: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastCtrl.create({
      message,
      color,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
