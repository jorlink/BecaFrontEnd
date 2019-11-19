import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamiloComponent } from './camilo.component';

describe('CamiloComponent', () => {
  let component: CamiloComponent;
  let fixture: ComponentFixture<CamiloComponent>;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CamiloComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
