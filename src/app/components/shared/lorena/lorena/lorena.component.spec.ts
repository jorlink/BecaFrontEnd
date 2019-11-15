import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorenaComponent } from './lorena.component';

describe('LorenaComponent', () => {
  let component: LorenaComponent;
  let fixture: ComponentFixture<LorenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LorenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
