import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HistorialTableComponent],
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  codigoBusqueda: string = '';
  equipos: { codigo: string; serial: string; modelo: string }[] = [];
  colaboradores: { nombre: string; departamento: string; correo: string }[] = [];

  constructor(public router: Router, private route: ActivatedRoute, private toastCtrl: ToastController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.codigoBusqueda = params['codigo'] || '';
      this.simularBusqueda();
    });
  }

  async buscar() {
    if (!this.codigoBusqueda.trim()) {
      this.showToast('Ingrese un código para buscar', 'warning');
      return;
    }
    this.simularBusqueda();
  }

  simularBusqueda() {
    // Simulación de equipos
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

    // Filtrar por código
    if (this.codigoBusqueda.trim() !== '') {
      const filtro = this.codigoBusqueda.trim().toUpperCase();
      this.equipos = this.equipos.filter(eq => eq.codigo.includes(filtro));
      if (this.equipos.length === 0) {
        this.showToast('No se encontraron equipos con ese código', 'warning');
      }
    }
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
