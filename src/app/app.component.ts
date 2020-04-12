import { Component } from '@angular/core';
import { ProviderService, Message } from './services/provider.service';
import { Observable } from 'rxjs/internal/Observable';
import { scan } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19';

  close(value) {
    console.log(value);
  }

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
