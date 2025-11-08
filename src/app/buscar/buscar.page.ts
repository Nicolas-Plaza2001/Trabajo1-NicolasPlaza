import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage {
  codigoBusqueda: string = '';

  constructor(public router: Router) {} 

  logout() {
    this.router.navigate(['/login']);
  }

  buscar() {
    this.router.navigate(['/resultado'], { queryParams: { codigo: this.codigoBusqueda } });
  }
}
