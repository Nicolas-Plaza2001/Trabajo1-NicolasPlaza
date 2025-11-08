import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioActualizarEmpleadoPage } from './inventario-actualizar-empleado.page';

describe('InventarioActualizarEmpleadoPage', () => {
  let component: InventarioActualizarEmpleadoPage;
  let fixture: ComponentFixture<InventarioActualizarEmpleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioActualizarEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
