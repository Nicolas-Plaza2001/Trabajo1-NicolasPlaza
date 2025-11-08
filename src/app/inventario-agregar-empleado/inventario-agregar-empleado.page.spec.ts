import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioAgregarEmpleadoPage } from './inventario-agregar-empleado.page';

describe('InventarioAgregarEmpleadoPage', () => {
  let component: InventarioAgregarEmpleadoPage;
  let fixture: ComponentFixture<InventarioAgregarEmpleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioAgregarEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
