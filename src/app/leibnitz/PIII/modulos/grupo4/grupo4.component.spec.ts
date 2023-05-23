import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupo4Component } from './grupo4.component';

describe('Grupo4Component', () => {
  let component: Grupo4Component;
  let fixture: ComponentFixture<Grupo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grupo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grupo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
