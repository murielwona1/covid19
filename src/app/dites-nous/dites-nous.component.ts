import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dites-nous',
  templateUrl: './dites-nous.component.html',
  styleUrls: ['./dites-nous.component.css']
})
export class DitesNousComponent implements OnInit {

  view: any;
  constructor() { }

  ngOnInit() {
  }

  open(value) {
    this.view = value;
  }
}
