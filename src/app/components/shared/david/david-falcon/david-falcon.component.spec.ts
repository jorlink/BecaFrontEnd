import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidFalconComponent } from './david-falcon.component';

describe('DavidFalconComponent', () => {
  let component: DavidFalconComponent;
  let fixture: ComponentFixture<DavidFalconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavidFalconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavidFalconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
