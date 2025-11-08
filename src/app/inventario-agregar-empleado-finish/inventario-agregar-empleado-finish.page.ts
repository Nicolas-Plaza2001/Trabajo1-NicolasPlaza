import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-agregar-empleado-finish',
  templateUrl: './inventario-agregar-empleado-finish.page.html',
  styleUrls: ['./inventario-agregar-empleado-finish.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class InventarioAgregarEmpleadoFinishPage {
  public correoEmpleado: string = 'usuario@empresa.com';

  constructor(public router: Router) {}

  finalizar() {
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
