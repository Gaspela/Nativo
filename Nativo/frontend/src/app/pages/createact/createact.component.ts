import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Global } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-createact',
  templateUrl: './createact.component.html',
  styleUrls: ['./createact.component.sass'],
  providers: [ActivitiesService, UploadService],
})
export class CreateactComponent implements OnInit {
  public title: string;
  //Object that modifies the form (activities)
  public activities: Activities;
  //Status save activities
  public status: string;
  //File image
  public filesToUpload: Array<File>;

  constructor(
    //Service Properties
    private _activitiesService: ActivitiesService,
    private _uploadService: UploadService
  ) {
    this.title = 'Creation activities';
    var f = new Date();
    var date = f.toString();
    var date = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
    this.activities = new Activities('', '', '', date, '','', '',' ', '', '', '', '');
  }

  ngOnInit() {}

  onSubmit(form) {
    /* console.log(this.activities); */
    this._activitiesService.saveActivities(this.activities).subscribe(
      (response) => {
        if (response.activities) {
          //Upload image
          this._uploadService
            .makeFileRequest(
              Global.url + 'uploadimgact/' + response.activities._id,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              this.status = 'success';
              console.log(result);
              form.reset();
            });
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput: any) {
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
