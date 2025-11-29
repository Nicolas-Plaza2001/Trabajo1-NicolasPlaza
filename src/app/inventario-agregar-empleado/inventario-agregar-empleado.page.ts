import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario-agregar-empleado',
  templateUrl: './inventario-agregar-empleado.page.html',
  styleUrls: ['./inventario-agregar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HistorialTableComponent]
})
export class InventarioAgregarEmpleadoPage {
  public nombre: string = '';
  public departamento: string = '';
  public correo: string = '';

  public historialAcciones: any[] = []; // historial local

  constructor(public router: Router, private toastCtrl: ToastController) {}

async generarQR() {
  if (!this.nombre.trim() || !this.departamento.trim() || !this.correo.trim()) {
    this.showToast('Complete todos los campos', 'warning');
    return;
  }

  // Agregamos al historial local
  this.historialAcciones.unshift({
    accion: 'Agregó empleado',
    nombre: this.nombre,
    departamento: this.departamento,
    correo: this.correo,
    estado: 'Nuevo'
  });

  this.showToast('Empleado agregado correctamente', 'success');

  // Redirigir a la página de QR pasando el correo
  this.router.navigate(['/inventario-agregar-empleado-finish'], {
    state: { correoEmpleado: this.correo }
  });

  // Limpiar inputs
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
