import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSolicitudComponent } from './navbar-solicitud.component';

describe('NavbarSolicitudComponent', () => {
  let component: NavbarSolicitudComponent;
  let fixture: ComponentFixture<NavbarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
