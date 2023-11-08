import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
})
export class AjoutComponent implements OnInit {
  hero = {
    name: '',
    power: 0,
    image: 'https://pa1.narvii.com/6288/8957d6c00a1d3193bd5d30be15d5a8087fd45af7_hq.gif',
  };
  heros: any[]= [];

  ajoute() {
    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      image: 'https://pa1.narvii.com/6288/8957d6c00a1d3193bd5d30be15d5a8087fd45af7_hq.gif',
    }

    console.log(this.heros);
  }
  constructor(public _shared: SharedService) {}


  ngOnInit(): void {}
}
