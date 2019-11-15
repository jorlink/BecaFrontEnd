import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NelsonComponent } from './nelson.component';

describe('NelsonComponent', () => {
  let component: NelsonComponent;
  let fixture: ComponentFixture<NelsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NelsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NelsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
