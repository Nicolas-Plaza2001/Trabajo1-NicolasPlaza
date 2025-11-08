import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioAgregarEquipoPage } from './inventario-agregar-equipo.page';

describe('InventarioAgregarEquipoPage', () => {
  let component: InventarioAgregarEquipoPage;
  let fixture: ComponentFixture<InventarioAgregarEquipoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioAgregarEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
