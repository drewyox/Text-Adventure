import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootcartComponent } from './lootcart.component';

describe('LootcartComponent', () => {
  let component: LootcartComponent;
  let fixture: ComponentFixture<LootcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
