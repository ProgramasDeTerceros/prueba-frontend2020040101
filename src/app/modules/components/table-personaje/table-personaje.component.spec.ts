import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePersonajeComponent } from './table-personaje.component';

describe('TablePersonajeComponent', () => {
  let component: TablePersonajeComponent;
  let fixture: ComponentFixture<TablePersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
