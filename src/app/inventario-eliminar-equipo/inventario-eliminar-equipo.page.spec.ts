import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioEliminarEquipoPage } from './inventario-eliminar-equipo.page';

describe('InventarioEliminarEquipoPage', () => {
  let component: InventarioEliminarEquipoPage;
  let fixture: ComponentFixture<InventarioEliminarEquipoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioEliminarEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
