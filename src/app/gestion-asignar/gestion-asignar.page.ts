import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivoService } from '../services/activo';

@Component({
  selector: 'app-gestion-asignar',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './gestion-asignar.page.html',
  styleUrls: ['./gestion-asignar.page.scss']
})
export class GestionAsignarPage {
  codigo: string = '';
  persona: string = '';

  equipo = [
    { codigo: 'TC-00003', serial: 'SN003', modelo: 'Laptop C' }
  ];

  constructor(
    public router: Router,
    private activoService: ActivoService
  ) {}

  logout() {
    this.router.navigate(['/login']);
  }

  asignar() {
    if (!this.codigo || !this.persona) {
      return;
    }
    
    this.activoService.asignarActivo(this.codigo, this.persona);
    this.router.navigate(['/gestion']);
  }
}
