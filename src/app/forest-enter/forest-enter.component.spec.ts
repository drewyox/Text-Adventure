import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestEnterComponent } from './forest-enter.component';

describe('ForestEnterComponent', () => {
  let component: ForestEnterComponent;
  let fixture: ComponentFixture<ForestEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
