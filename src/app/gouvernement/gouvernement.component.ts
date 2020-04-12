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
  showLoarder: boolean = true;

  constructor(private provide: ProviderService, public sanitizer: DomSanitizer) {
    this.getActualité(this.key);
  }

  ngOnInit() {
  }

  getActualité(offset) {
    this.provide.getAllDataLimit('publication/list-publication', offset, 'que fait le gouvernement').then((result: any) => {
      if (result.length > 0) {
        this.gouvernements = result;
        this.activeIndex(0);
      }

      this.showLoarder = false;
    });
  }

  async preview() {
    this.btnReview = false;
    this.key = this.key + 3;
    this.getActualité(this.key);
    if (this.gouvernements.length > 0) {
      this.btnPreview = false;
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
