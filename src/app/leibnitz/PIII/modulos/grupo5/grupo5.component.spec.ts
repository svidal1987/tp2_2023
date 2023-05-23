import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupo5Component } from './grupo5.component';

describe('Grupo5Component', () => {
  let component: Grupo5Component;
  let fixture: ComponentFixture<Grupo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grupo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grupo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
