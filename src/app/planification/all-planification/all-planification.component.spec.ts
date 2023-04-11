import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlanificationComponent } from './all-planification.component';

describe('AllPlanificationComponent', () => {
  let component: AllPlanificationComponent;
  let fixture: ComponentFixture<AllPlanificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlanificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
