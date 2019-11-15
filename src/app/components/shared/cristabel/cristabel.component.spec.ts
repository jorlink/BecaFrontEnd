import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CristabelComponent } from './cristabel.component';

describe('CristabelComponent', () => {
  let component: CristabelComponent;
  let fixture: ComponentFixture<CristabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CristabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CristabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
