import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-eliminar-equipo',
  templateUrl: './inventario-eliminar-equipo.page.html',
  styleUrls: ['./inventario-eliminar-equipo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class InventarioEliminarEquipoPage {
  public codigoEquipo: string = '';

  constructor(public router: Router) {}

  eliminarEquipo() {
    console.log('Equipo eliminado:', this.codigoEquipo);
    // Aquí iría la lógica real de eliminación.
    // Por ahora solo redirige al inventario.
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
