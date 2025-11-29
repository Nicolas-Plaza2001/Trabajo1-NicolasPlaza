import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario-agregar-equipo',
  templateUrl: './inventario-agregar-equipo.page.html',
  styleUrls: ['./inventario-agregar-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HistorialTableComponent]
})
export class InventarioAgregarEquipoPage {
  public codigo: string = '';
  public serial: string = '';
  public modelo: string = '';
  public cpu: string = '';
  public ram: string = '';
  public almacenamiento: string = '';

  public historialAcciones: any[] = []; // historial local

  constructor(public router: Router, private toastCtrl: ToastController) {}

  async generarQR() {
    // Validación básica
    if (!this.codigo.trim() || !this.serial.trim() || !this.modelo.trim() ||
        !this.cpu.trim() || !this.ram.trim() || !this.almacenamiento.trim()) {
      this.showToast('Complete todos los campos', 'warning');
      return;
    }

    // Guardamos en el historial local
    this.historialAcciones.unshift({
      accion: 'Agregó equipo',
      codigo: this.codigo,
      serial: this.serial,
      modelo: this.modelo,
      cpu: this.cpu,
      ram: this.ram,
      almacenamiento: this.almacenamiento,
      estado: 'Nuevo'
    });

    this.showToast('Equipo agregado correctamente', 'success');

    // Redirigir a pantalla de QR pasando el código
    this.router.navigate(['/inventario-agregar-equipo-finish'], {
      state: { codigoEquipo: this.codigo }
    });

    // Limpiar inputs
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
