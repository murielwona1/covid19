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
  showLoarder: boolean = true;

  constructor(private provide: ProviderService, public sanitizer: DomSanitizer) {
    this.getActualité(this.key);
  }

  ngOnInit() {
  }

  getActualité(offset) {
    this.provide.getAllDataLimit('publication/list-publication', offset, 'point de presse').then((result: any) => {
      if (result.length > 0) {
        this.points = result;
      }
      this.activeIndex(0);

      this.showLoarder = false;
    });
  }

  async preview() {
    this.btnReview = false;
    this.key = this.key + 3;
    this.getActualité(this.key);
    if (this.points.length > 0) {
      this.btnPreview = false;
      console.log(this.points.length);
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
