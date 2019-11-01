import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoredService {
  //endpoint for random activity
  apiEndPoint = 'http://www.boredapi.com/api/activity/';
  //endpoint for activity of an type by name
  apiEndPointType = 'http://www.boredapi.com/api/activity?type=';

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get(this.apiEndPoint);
  }
  getActivitiesByType(type){
    return this.http.get(`${this.apiEndPointType}${type}`);
  }
}
