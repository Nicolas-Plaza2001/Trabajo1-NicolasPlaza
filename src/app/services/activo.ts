import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Activo {
  codigo: string;
  asignado: string;
  estado: 'Asignado' | 'Devuelto' | string;
  fecha?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private historialSource = new BehaviorSubject<Activo[]>([
    { codigo: 'TC-0001', asignado: 'Juan Pérez', estado: 'Asignado', fecha: '2024-01-01' },
    { codigo: 'TC-0002', asignado: '', estado: 'Devuelto', fecha: '2024-01-02' }
  ]);

  
  historial$ = this.historialSource.asObservable();

  constructor() {}

  
  getHistorial(): Activo[] {
    return this.historialSource.value;
  }

  
  asignarActivo(codigo: string, asignado: string) {
    const nuevo: Activo = {
      codigo,
      asignado,
      estado: 'Asignado',
      fecha: new Date().toISOString()
    };
    this.historialSource.next([nuevo, ...this.getHistorial()]);
  }

  
  devolverActivo(codigo: string) {
    const nuevo: Activo = {
      codigo,
      asignado: '',
      estado: 'Devuelto',
      fecha: new Date().toISOString()
    };
    this.historialSource.next([nuevo, ...this.getHistorial()]);
  }
}
