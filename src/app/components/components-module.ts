import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivoCardComponent } from './activo-card/activo-card.component';
import { HistorialTableComponent } from './historial-table/historial-table.component';

@NgModule({
  declarations: [
    ActivoCardComponent,
    HistorialTableComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ActivoCardComponent,
    HistorialTableComponent
  ]
})
export class ComponentsModule {}
