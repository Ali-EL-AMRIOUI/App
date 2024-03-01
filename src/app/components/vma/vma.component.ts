import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vma',
  templateUrl: './vma.component.html',
  styleUrls: ['./vma.component.scss']
})
export class VmaComponent  implements OnInit {
  average: number=0;
  meters: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  averageSpeed: string = '';
  averageTimePerKm: string = '';
  
    ngOnInit() {
      

      console.log(this.getResult);
    }

    getResult() {
      const totalMinutes = this.hours * 60 + this.minutes + this.seconds / 60;
    this.average=this.meters / 1000 / (totalMinutes / 60);
    this.averageSpeed = `${this.average.toFixed(2)} km/h`;
  
    const timePerKm = totalMinutes / (this.meters / 1000);
    const minutesPerKm = Math.floor(timePerKm);
    const secondsPerKm = Math.round((timePerKm - minutesPerKm) * 60);
    this.averageTimePerKm = `${minutesPerKm} min ${secondsPerKm} sec`;
    }
}

