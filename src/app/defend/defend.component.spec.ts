import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefendComponent } from './defend.component';

describe('DefendComponent', () => {
  let component: DefendComponent;
  let fixture: ComponentFixture<DefendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
