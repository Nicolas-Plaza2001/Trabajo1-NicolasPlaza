import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'historial-table',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './historial-table.component.html',
  styleUrls: ['./historial-table.component.scss']
})
export class HistorialTableComponent {
  @Input() data: any[] = [];
}
