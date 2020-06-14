import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activities } from '../models/activities';
import { Global } from './global';

@Injectable()
export class ActivitiesService {
  public url: string;

  constructor(private _hhtp: HttpClient) {
    this.url = Global.url;
  }
  testService() {
    return 'Test service angular';
  }

  saveActivities(activities: Activities): Observable<any> {
    let params = JSON.stringify(activities);
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._hhtp.post(this.url + 'addactivities', params, {
      headers: headers,
    });
  }

  getActivities(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._hhtp.get(this.url + 'listactivities', { headers: headers });
  }
}
