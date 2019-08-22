import { Component, OnInit } from '@angular/core';
import { BoredService } from './bored.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {
  activityType: string = 'recreational';
  activity: any = [];
  type: any;
  types: any = ['education','recreational','social','diy','charity', 'cooking','relaxation','music','busywork'];

  constructor(private bored: BoredService) { }

  ngOnInit() {
    console.log(this.bored.getActivities());

    this.getActivityByType('cooking');
    console.log(this.type);

  }

  getActivityByType(type) {
    console.log(this.activityType);
    if (this.type != 'recreational') {
      this.bored.getActivitiesByType(this.type).subscribe(
        res => {
          this.activity = res['activity'];

        }
      );
    } else {
      this.bored.getActivities().subscribe(
        res => {
          this.activity = res['activity'];
        }
      );
    }
  }
  //teste

}
