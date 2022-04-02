import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPersonajeComponent } from './seccion-personaje.component';

describe('SeccionPersonajeComponent', () => {
  let component: SeccionPersonajeComponent;
  let fixture: ComponentFixture<SeccionPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
