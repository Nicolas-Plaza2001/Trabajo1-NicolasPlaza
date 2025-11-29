import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivoService } from '../services/activo';
import { ActivoCardComponent } from '../components/activo-card/activo-card.component';
import { HistorialTableComponent } from '../components/historial-table/historial-table.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ActivoCardComponent,
    HistorialTableComponent
  ],
})
export class GestionPage {

  historial: any[] = [];

  constructor(
    public router: Router,
    private activoService: ActivoService
  ) {}

  ngOnInit() {
    // Suscribirse al historial reactivo del servicio
    this.activoService.historial$.subscribe(data => {
      this.historial = data;
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }

  asignarActivo() {
    this.router.navigate(['/gestion-asignar']);
  }

  devolverActivo() {
    this.router.navigate(['/gestion-devolver']);
  }
}
