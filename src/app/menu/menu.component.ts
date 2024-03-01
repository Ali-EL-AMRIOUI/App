// menu.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isListActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleList() {
    console.log('Toggle function called');
    this.isListActive = !this.isListActive;
    console.log('isListActive:', this.isListActive);  }
}
