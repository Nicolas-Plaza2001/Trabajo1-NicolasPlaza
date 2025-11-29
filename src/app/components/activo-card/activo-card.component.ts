import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'activo-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './activo-card.component.html',
  styleUrls: ['./activo-card.component.scss']
})
export class ActivoCardComponent {
  @Input() codigo!: string;
  @Input() asignado!: string;
  @Input() estado!: string;
}
