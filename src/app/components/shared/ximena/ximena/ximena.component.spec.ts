import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XimenaComponent } from './ximena.component';

describe('XimenaComponent', () => {
  let component: XimenaComponent;
  let fixture: ComponentFixture<XimenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XimenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XimenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
