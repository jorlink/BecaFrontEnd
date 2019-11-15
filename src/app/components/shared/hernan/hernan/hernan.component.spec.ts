import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HernanComponent } from './hernan.component';

describe('HernanComponent', () => {
  let component: HernanComponent;
  let fixture: ComponentFixture<HernanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HernanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HernanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
