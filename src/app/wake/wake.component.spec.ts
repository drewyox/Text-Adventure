import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeComponent } from './wake.component';

describe('WakeComponent', () => {
  let component: WakeComponent;
  let fixture: ComponentFixture<WakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
