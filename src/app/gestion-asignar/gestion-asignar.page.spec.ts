import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionAsignarPage } from './gestion-asignar.page';

describe('GestionAsignarPage', () => {
  let component: GestionAsignarPage;
  let fixture: ComponentFixture<GestionAsignarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAsignarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
