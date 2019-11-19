import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOcultoComponent } from './component-oculto.component';

describe('ComponentOcultoComponent', () => {
  let component: ComponentOcultoComponent;
  let fixture: ComponentFixture<ComponentOcultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOcultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOcultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
