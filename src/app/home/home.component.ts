import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  heading: any;
  idList: any;

  constructor(private homeServiceInstance: HomeService) { }

  ngOnInit(): void {
    this.heading = "Current component:- home!";

    this.idList = [];
    this.idList = this.homeServiceInstance.getListOfPRoducts();
    console.log("\n-----idList-----" + JSON.stringify(this.idList));
  }

  ngOnChanges() {
  }

  // Single Responsibiliy Principal
  ngOnDestroy() {
    this.heading = null;
  }

}
