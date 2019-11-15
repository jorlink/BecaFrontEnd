import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlonsoComponent } from './alonso.component';

describe('AlonsoComponent', () => {
  let component: AlonsoComponent;
  let fixture: ComponentFixture<AlonsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlonsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlonsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
