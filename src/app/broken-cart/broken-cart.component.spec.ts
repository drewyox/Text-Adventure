import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenCartComponent } from './broken-cart.component';

describe('BrokenCartComponent', () => {
  let component: BrokenCartComponent;
  let fixture: ComponentFixture<BrokenCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
