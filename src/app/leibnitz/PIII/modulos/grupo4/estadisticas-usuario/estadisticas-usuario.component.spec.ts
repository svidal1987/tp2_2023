import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasUsuarioComponent } from './estadisticas-usuario.component';

describe('EstadisticasUsuarioComponent', () => {
  let component: EstadisticasUsuarioComponent;
  let fixture: ComponentFixture<EstadisticasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
