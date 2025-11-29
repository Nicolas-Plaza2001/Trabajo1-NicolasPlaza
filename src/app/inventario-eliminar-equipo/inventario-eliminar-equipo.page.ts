import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-inventario-eliminar-equipo',
  templateUrl: './inventario-eliminar-equipo.page.html',
  styleUrls: ['./inventario-eliminar-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, HistorialTableComponent]
})
export class InventarioEliminarEquipoPage {
  public codigoEquipo: string = '';
  public historialAcciones: any[] = []; // historial local

  constructor(public router: Router, private toastCtrl: ToastController) {}

  async eliminarEquipo() {
    if (!this.codigoEquipo.trim()) {
      this.showToast('Ingrese un código válido', 'warning');
      return;
    }

    // Agregar al historial local
    this.historialAcciones.unshift({
      accion: 'Eliminó equipo',
      codigo: this.codigoEquipo,
      estado: 'Eliminado'
    });

    this.showToast(`Equipo ${this.codigoEquipo} eliminado`, 'success');

    // Limpiar input
    this.codigoEquipo = '';
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
