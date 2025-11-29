import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario-actualizar-equipo',
  templateUrl: './inventario-actualizar-equipo.page.html',
  styleUrls: ['./inventario-actualizar-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HistorialTableComponent]
})
export class InventarioActualizarEquipoPage {
  public codigo: string = '';
  public serial: string = '';
  public modelo: string = '';
  public cpu: string = '';
  public ram: string = '';
  public almacenamiento: string = '';

  public historialAcciones: any[] = []; // Historial local

  constructor(public router: Router, private toastCtrl: ToastController) {}

  async actualizarEquipo() {
    // Validación básica
    if (!this.codigo || !this.serial || !this.modelo || !this.cpu || !this.ram || !this.almacenamiento) {
      this.showToast('Complete todos los campos', 'warning');
      return;
    }

    // Guardamos en el historial local
    this.historialAcciones.unshift({
      accion: 'Actualizó equipo',
      codigo: this.codigo,
      serial: this.serial,
      modelo: this.modelo,
      cpu: this.cpu,
      ram: this.ram,
      almacenamiento: this.almacenamiento,
      estado: 'Actualizado'
    });

    this.showToast('Equipo actualizado correctamente', 'success');

    // Limpiamos inputs
    this.codigo = '';
    this.serial = '';
    this.modelo = '';
    this.cpu = '';
    this.ram = '';
    this.almacenamiento = '';
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
