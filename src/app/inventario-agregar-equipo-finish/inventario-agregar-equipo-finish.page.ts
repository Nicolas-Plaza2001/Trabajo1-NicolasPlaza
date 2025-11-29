import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario-agregar-equipo-finish',
  templateUrl: './inventario-agregar-equipo-finish.page.html',
  styleUrls: ['./inventario-agregar-equipo-finish.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class InventarioAgregarEquipoFinishPage {
  public codigoEquipo: string = '';

  constructor(public router: Router) {
    // Recuperar código enviado por navegación
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['codigoEquipo']) {
      this.codigoEquipo = nav.extras.state['codigoEquipo'];
    }
  }

  finalizar() {
    this.router.navigate(['/inventario']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
