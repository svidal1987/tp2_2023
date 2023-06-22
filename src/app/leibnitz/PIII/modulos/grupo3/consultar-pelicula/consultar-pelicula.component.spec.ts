import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPeliculaComponent } from './consultar-pelicula.component';

describe('ConsultarPeliculaComponent', () => {
  let component: ConsultarPeliculaComponent;
  let fixture: ComponentFixture<ConsultarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
