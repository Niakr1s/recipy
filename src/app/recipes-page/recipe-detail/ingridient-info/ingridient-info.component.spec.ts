import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientInfoComponent } from './ingridient-info.component';

describe('IngridientInfoComponent', () => {
  let component: IngridientInfoComponent;
  let fixture: ComponentFixture<IngridientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngridientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngridientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
