import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const apiUrl = `${environment.url}`;

export class Message {
  constructor(public content: string, public sendBy: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(public http: HttpClient) { }

  getAllData(route: string) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + route)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllDataLimit(route: string, key: any, type: any) {
    return new Promise((resolve, reject) => {
      const url = apiUrl + route + '/' + key + '/' + type;
      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
                .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
                });
  }
}
