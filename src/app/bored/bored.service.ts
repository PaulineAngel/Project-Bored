import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  apiEndPoint = 'http://www.boredapi.com/api/activity/';
  apiEndPointType = 'http://www.boredapi.com/api/activity?type=';

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get(this.apiEndPoint);
  }

  getType(){
    return this.http.get(this.apiEndPointType);
  }

  getActivitiesByType(type){
    return this.http.get(`${this.apiEndPointType}${type}`);
  }
}
