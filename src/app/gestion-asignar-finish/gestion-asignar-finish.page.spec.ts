import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionAsignarFinishPage } from './gestion-asignar-finish.page';

describe('GestionAsignarFinishPage', () => {
  let component: GestionAsignarFinishPage;
  let fixture: ComponentFixture<GestionAsignarFinishPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAsignarFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
