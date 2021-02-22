import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCartComponent } from './in-cart.component';

describe('InCartComponent', () => {
  let component: InCartComponent;
  let fixture: ComponentFixture<InCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
