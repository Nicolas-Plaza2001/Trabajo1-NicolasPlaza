import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-asignar-finish',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './gestion-asignar-finish.page.html',
  styleUrls: ['./gestion-asignar-finish.page.scss']
})
export class GestionAsignarFinishPage {
  colaboradores = [
    { nombre: 'Juan Pérez', departamento: 'TI', correo: 'juan.perez@empresa.com' }
  ];

  constructor(public router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  finalizar() {
    this.router.navigate(['/gestion']);
  }
}
