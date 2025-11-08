import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioActualizarEquipoPage } from './inventario-actualizar-equipo.page';

describe('InventarioActualizarEquipoPage', () => {
  let component: InventarioActualizarEquipoPage;
  let fixture: ComponentFixture<InventarioActualizarEquipoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioActualizarEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
