import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-createact',
  templateUrl: './createact.component.html',
  styleUrls: ['./createact.component.sass'],
  providers: [ActivitiesService]
})
export class CreateactComponent implements OnInit {

  public title: string;
  //Object that modifies the form (activities)
  public activities: Activities;

  constructor(
    //Service Properties
    private _activitiesService: ActivitiesService
  ) {
    this.title = "Creation activities";
    var f = new Date();
    var date = f.toString();
    var date = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    this.activities = new Activities('', '', '', date, '', '', '', '', '', '');
  }

  ngOnInit() {

  }

  onSubmit(form) {
    console.log(this.activities);
    this._activitiesService.saveActivities(this.activities).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }   
    );
  }
}
