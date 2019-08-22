import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  apiEndPoint = 'http://www.boredapi.com/api/activity/';

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get(this.apiEndPoint);
  }
}
