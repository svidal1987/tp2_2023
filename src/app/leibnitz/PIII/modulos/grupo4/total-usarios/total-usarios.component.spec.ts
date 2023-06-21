import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUsariosComponent } from './total-usarios.component';

describe('TotalUsariosComponent', () => {
  let component: TotalUsariosComponent;
  let fixture: ComponentFixture<TotalUsariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalUsariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalUsariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
