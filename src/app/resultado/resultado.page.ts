import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  codigoBusqueda: string = '';
  equipos: { codigo: string; serial: string; modelo: string }[] = [];
  colaboradores: { nombre: string; departamento: string; correo: string }[] = [];

  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Tomar el parámetro del query string si viene de buscar
    this.route.queryParams.subscribe(params => {
      this.codigoBusqueda = params['codigo'] || '';
      this.simularBusqueda();
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }

  buscar() {
    // Solo vuelve a simular búsqueda según el input
    this.simularBusqueda();
  }

  simularBusqueda() {
    // Simulación de equipos con código TC-000X
    this.equipos = [
      { codigo: 'TC-0001', serial: 'S001', modelo: 'Modelo A' },
      { codigo: 'TC-0002', serial: 'S002', modelo: 'Modelo B' },
      { codigo: 'TC-0003', serial: 'S003', modelo: 'Modelo C' }
    ];

    // Simulación de colaboradores
    this.colaboradores = [
      { nombre: 'Juan Pérez', departamento: 'TI', correo: 'juan.p@empresa.com' },
      { nombre: 'Ana Gómez', departamento: 'RRHH', correo: 'ana.g@empresa.com' },
      { nombre: 'Carlos Soto', departamento: 'Finanzas', correo: 'carlos.s@empresa.com' }
    ];

    // Filtrar por código si hay algo escrito en el input
    if (this.codigoBusqueda.trim() !== '') {
      const filtro = this.codigoBusqueda.trim().toUpperCase();
      this.equipos = this.equipos.filter(eq => eq.codigo.includes(filtro));
      // Para la demo, los colaboradores siempre se muestran igual
    }
  }
}
