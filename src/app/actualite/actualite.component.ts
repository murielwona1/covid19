import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  key = 0;
  btnPreview = false;
  btnReview = false;
  data: any;
  urlSafe: SafeResourceUrl;
  indexe = 0;
  actualites: any = [];

  constructor(private provide: ProviderService, public sanitizer: DomSanitizer) {
    this.getActualité(this.key);
  }

  ngOnInit() {
  }

  getActualité(offset) {
    this.provide.getAllDataLimit('api/publication/list-publication', offset, 'actualité').then(result => {
      this.actualites = result;
      console.log(this.actualites);
      this.activeIndex(0);
    });
  }

  async preview() {
    this.btnReview = false;
    this.key = this.key + 3;
    this.getActualité(this.key);
    this.actualites = [];
    if (this.actualites.length < 3) {
      this.btnPreview = true;
    }
  }

  async review() {
    this.btnPreview = false;
    this.key = this.key - 3;
    if (this.key === 0) {
      this.getActualité(this.key);
      this.btnReview = true;
    }
  }

  activeIndex(i) {
    this.indexe = i;
    this.data = this.actualites[i];
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.actualites[i].videos);
  }

}
