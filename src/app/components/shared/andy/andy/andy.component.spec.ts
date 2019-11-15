import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndyComponent } from './andy.component';

describe('AndyComponent', () => {
  let component: AndyComponent;
  let fixture: ComponentFixture<AndyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
