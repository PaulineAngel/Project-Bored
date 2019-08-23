import { Component, OnInit } from '@angular/core';
import { BoredService } from './bored.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent implements OnInit {
  activityType: string = 'random';
  activity: any = [];
  type: any;
  types: any = ['education','recreational','social','diy','charity', 'cooking','relaxation','music','busywork', 'random'];
  goodActivities: any = [];
  liked: boolean = true;

  constructor(private bored: BoredService) { }

  ngOnInit() {
  }

  likeActivities(activity){
    this.goodActivities.push(this.activity);
  }
  removeActivities(index){
    this.goodActivities.splice(index,1);
  }

  getLiked(){
    if ((this.goodActivities.includes(this.activity)) || (this.activity == null )){
        this.liked = true;
    }else{
      this.liked = false;
    }
    return this.liked;
  }
  

  getActivityByType(type) {
    console.log(this.activityType);
    if (this.type != 'random') {
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
  //testePauline

}
