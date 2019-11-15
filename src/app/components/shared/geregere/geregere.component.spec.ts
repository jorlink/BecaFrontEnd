import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeregereComponent } from './geregere.component';

describe('GeregereComponent', () => {
  let component: GeregereComponent;
  let fixture: ComponentFixture<GeregereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeregereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeregereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
