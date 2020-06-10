import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyactivitiesComponent } from './dailyactivities.component';

describe('DailyactivitiesComponent', () => {
  let component: DailyactivitiesComponent;
  let fixture: ComponentFixture<DailyactivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyactivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
