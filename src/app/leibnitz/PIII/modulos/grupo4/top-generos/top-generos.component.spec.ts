import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGenerosComponent } from './top-generos.component';

describe('TopGenerosComponent', () => {
  let component: TopGenerosComponent;
  let fixture: ComponentFixture<TopGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
