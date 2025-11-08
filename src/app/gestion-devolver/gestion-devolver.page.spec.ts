import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionDevolverPage } from './gestion-devolver.page';

describe('GestionDevolverPage', () => {
  let component: GestionDevolverPage;
  let fixture: ComponentFixture<GestionDevolverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDevolverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
