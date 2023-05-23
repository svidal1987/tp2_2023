import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupo6Component } from './grupo6.component';

describe('Grupo6Component', () => {
  let component: Grupo6Component;
  let fixture: ComponentFixture<Grupo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grupo6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grupo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
