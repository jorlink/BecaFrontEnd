import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OliverComponent } from './oliver.component';

describe('OliverComponent', () => {
  let component: OliverComponent;
  let fixture: ComponentFixture<OliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
