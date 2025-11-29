import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario-actualizar-empleado',
  templateUrl: './inventario-actualizar-empleado.page.html',
  styleUrls: ['./inventario-actualizar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HistorialTableComponent]
})
export class InventarioActualizarEmpleadoPage {
  public nombre: string = '';
  public departamento: string = '';
  public correo: string = '';

  public historialAcciones: any[] = []; // Local, sin servicio

  constructor(public router: Router, private toastCtrl: ToastController) {}

  async actualizarEmpleado() {
    if (!this.nombre || !this.departamento || !this.correo) {
      this.showToast('Complete todos los campos', 'warning');
      return;
    }

    // Actualizamos localmente el historial
    this.historialAcciones.unshift({
      accion: 'Actualizó empleado',
      nombre: this.nombre,
      departamento: this.departamento,
      correo: this.correo,
      estado: 'Actualizado'
    });

    this.showToast('Empleado actualizado correctamente', 'success');

    // Limpiamos inputs
    this.nombre = '';
    this.departamento = '';
    this.correo = '';
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
