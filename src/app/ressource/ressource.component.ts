import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  showLoarder: boolean = true;
  viewMode = "video";

  constructor() {
    setTimeout(() => {
      this.showLoarder = false;
    }, 1000);
  }

  ngOnInit() {
  }

  setView(view) {
    this.viewMode = view;
  }

}
