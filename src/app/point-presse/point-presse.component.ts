import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-point-presse',
  templateUrl: './point-presse.component.html',
  styleUrls: ['./point-presse.component.css']
})
export class PointPresseComponent implements OnInit {
  key = 0;
  points: any = [];
  btnPreview = false;
  btnReview = false;
  data: any;
  urlSafe: SafeResourceUrl;
  indexe = 0;

  constructor(private provide: ProviderService, public sanitizer: DomSanitizer) {
    this.getActualité(this.key);
  }

  ngOnInit() {
  }

  getActualité(offset) {
    this.provide.getAllDataLimit('api/publication/list-publication', offset, 'point de presse').then(result => {
      this.points = result;
      console.log(this.points);
      this.activeIndex(0);
    });
  }

  async preview() {
    this.btnReview = false;
    this.key = this.key + 3;
    this.getActualité(this.key);
    this.points = [];
    if ( this.points.length < 3 ) {
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
    this.data = this.points[i];
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.points[i].videos);
  }
}
