import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersGridComponent } from './offers-grid.component';

describe('OffersGridComponent', () => {
  let component: OffersGridComponent;
  let fixture: ComponentFixture<OffersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
