import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BastianComponent } from './bastian.component';

describe('BastianComponent', () => {
  let component: BastianComponent;
  let fixture: ComponentFixture<BastianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BastianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BastianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
