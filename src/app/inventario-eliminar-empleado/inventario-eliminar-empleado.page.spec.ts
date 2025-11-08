import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioEliminarEmpleadoPage } from './inventario-eliminar-empleado.page';

describe('InventarioEliminarEmpleadoPage', () => {
  let component: InventarioEliminarEmpleadoPage;
  let fixture: ComponentFixture<InventarioEliminarEmpleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioEliminarEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
