import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProfesoresComponent } from './seccion-profesores.component';

describe('SeccionProfesoresComponent', () => {
  let component: SeccionProfesoresComponent;
  let fixture: ComponentFixture<SeccionProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
