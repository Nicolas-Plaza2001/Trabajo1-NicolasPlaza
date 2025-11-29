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
  public correoEmpleado: string = '';

  constructor(public router: Router) {
    // Recuperar correo enviado por navegación
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['correoEmpleado']) {
      this.correoEmpleado = nav.extras.state['correoEmpleado'];
    }
  }

  finalizar() {
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
