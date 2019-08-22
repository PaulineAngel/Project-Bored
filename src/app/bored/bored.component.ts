import { Component, OnInit } from '@angular/core';
import { BoredService } from './bored.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {
  activityType: String = 'recreational';
  activity: any = [];
  type: any = [];
  /*types: enum = [];
  types = {
    education = 'education',
    recreational =  'recreational',
    social = 'social',
    diy =  'diy',
    charity = 'charity',
    cooking =  'cooking',
    relaxation =  'relaxation',
    music =  'music',
    busywork = 'busywork'
  }*/

  constructor(private bored: BoredService) { }

  ngOnInit() {
    console.log(this.bored.getActivities());
    /*this.getActivityByType();*/

  }

  getActivityByType(type) {
    console.log(this.activityType);
    this.bored.getActivitiesByType(this.type).subscribe(
      res => {
        this.activity = res['activity'];
        this.bored.activityType.push(['type']);

        console.log(res);
        console.log(this.activityType);
      }
    );
  }

  getTypes() {
    this.bored.getType(this.activityType);
  }

}

