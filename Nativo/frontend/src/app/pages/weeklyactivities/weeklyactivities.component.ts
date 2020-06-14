import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-weeklyactivities',
  templateUrl: './weeklyactivities.component.html',
  styleUrls: ['./weeklyactivities.component.sass'],
  providers: [ActivitiesService],
})
export class WeeklyactivitiesComponent implements OnInit {
  public activities: Activities[];
  public url: string;
  constructor(private _activitiesService: ActivitiesService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this._activitiesService.getActivities().subscribe(
      (response) => {
        console.log(response);
        if (response.activities) {
          this.activities = response.activities;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
