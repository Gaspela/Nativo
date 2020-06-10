import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyactivitiesComponent } from './weeklyactivities.component';

describe('WeeklyactivitiesComponent', () => {
  let component: WeeklyactivitiesComponent;
  let fixture: ComponentFixture<WeeklyactivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyactivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
