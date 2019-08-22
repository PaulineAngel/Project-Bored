import { Component, OnInit } from '@angular/core';
import { BoredService } from './bored.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {
  activities: any = [];
  activity: String = '';
  constructor(private bored: BoredService) { }

  ngOnInit() {
    console.log(this.bored.getActivities());
    this.getActivity();

  }

  getActivity() {
    console.log(this.activities);
    this.bored.getActivities().subscribe(
      res => {
        this.activity = res['activity'];
        console.log(res);
        this.activities.push(res['type']);
        console.log(this.activities);
      }
        );
      }

  }

