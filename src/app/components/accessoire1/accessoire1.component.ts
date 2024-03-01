
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-accessoire1',
  templateUrl: './accessoire1.component.html',
  styleUrls: ['./accessoire1.component.scss']
})
export class Accessoire1Component implements OnInit {
  ListDistance = [100, 150, 200, 250, 300, 350, 400];
  ListPourcentage = [85, 90, 100, 110, 120, 125, 130, 140];
  vma: number = 0;
  result: any[][] = [];
  inputValues: any[][] = [];

  constructor() { }

  getDelete() {
    throw new Error('Method not implemented.');
    }
  ngOnInit(): void {
    for (let i = 0; i < this.ListDistance.length; i++) {
      this.inputValues[i] = [];
      for (let j = 0; j < this.ListPourcentage.length; j++) {
        this.inputValues[i][j] = '';
      }
    }
  }

  getCalculate() {
    for (let prc = 0; prc < this.ListPourcentage.length; prc++) {
      for (let dis = 0; dis < this.ListDistance.length; dis++) {
        const resultInSeconds = (this.ListDistance[dis] * this.ListPourcentage[prc]) / this.vma;
        const timeMinutes = Math.floor(resultInSeconds / 60);
        const timeSeconds = Math.floor(resultInSeconds - timeMinutes * 60);

        if (resultInSeconds >= 60) {
          this.result[dis][prc] = `${timeMinutes} min ${timeSeconds} s`;
        } else {
          this.result[dis][prc] = `${resultInSeconds}s`;
        }
      }
    }
  }
}
