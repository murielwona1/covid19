import { Component, OnInit } from '@angular/core';
import { ProviderService, Message } from '../services/provider.service';
import { Observable } from 'rxjs/internal/Observable';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public provider: ProviderService) { }

  ngOnInit() {
    this.messages = this.provider.conversation.asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
  }
  sendMessage() {
    this.provider.converse(this.formValue);
    this.formValue = '';
  }
}
