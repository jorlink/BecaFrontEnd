import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnaciaComponent } from './ignacia.component';

describe('IgnaciaComponent', () => {
  let component: IgnaciaComponent;
  let fixture: ComponentFixture<IgnaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgnaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
