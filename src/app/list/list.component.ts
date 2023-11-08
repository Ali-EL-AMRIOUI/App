import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {


  heros: any[]= [];


  constructor(public _shared: SharedService){}

  ngOnInit(): void {}

}
