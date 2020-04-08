import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gouvernement',
  templateUrl: './gouvernement.component.html',
  styleUrls: ['./gouvernement.component.css']
})
export class GouvernementComponent implements OnInit {
  key = 0;
  gouvernements: any = [];
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
    this.provide.getAllDataLimit('api/publication/list-publication', offset, 'que fais le gouvernement').then(result => {
      this.gouvernements = result;
      console.log(this.gouvernements);
      this.activeIndex(0);
    });
  }

  async preview() {
    this.btnReview = false;
    this.key = this.key + 3;
    this.getActualité(this.key);
    this.gouvernements = [];
    if (this.gouvernements.length < 3) {
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
    this.data = this.gouvernements[i];
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.gouvernements[i].videos);
  }

}
