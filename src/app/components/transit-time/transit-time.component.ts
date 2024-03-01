import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-transit-time',
  templateUrl: './transit-time.component.html',
  styleUrls: ['./transit-time.component.scss']
})

export class TransitTimeComponent implements OnInit {
  [x: string]: any;

  timesForDistances: string[] = [];
  timesForPercentages: string[] = [];
vma: any;
name: any;
date: any;

  ngOnInit() {
  }

  getResult() {

      this.calculateTimesForDistances();
      this.calculateTimesForPercentages();
  }

  calculateTimesForDistances() {
      this.timesForDistances.push(this['calculateTimeAtVMA'](80));
      this.timesForDistances.push(this['calculateTimeAtVMA'](100));
  }

  calculateTimesForPercentages() {
      this.timesForPercentages.push(this['calculateTimeAtVMA'](this['meters'] * 0.75));
      this.timesForPercentages.push(this['calculateTimeAtVMA'](this['meters'] * 0.80));
  }


getCalculate(){
  

}
getPrint(){


}

getDelete(){}


}




