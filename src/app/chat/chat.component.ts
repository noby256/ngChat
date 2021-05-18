import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './message.model';
import { Subscription } from 'rxjs';

const TAG = '[ChatComponent]: ';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, OnDestroy {
  title = 'ngChat';
  author = 'Client';
  private msgSubscribtion: Subscription;
  messages: Message[] = [];
  textarea = '';

  constructor(private chat: ChatService){ }

  ngOnInit(): void {
    console.log(TAG + 'ngOnInit()');
    this.msgSubscribtion = this.chat.messages.pipe().subscribe(msg => {
      console.log(TAG + 'messages: ' + JSON.stringify(msg));
      this.messages.push(msg);
    });
  }

  ngOnDestroy(): void {
    console.log(TAG + ' ngOnDestroy()');
    this.msgSubscribtion.unsubscribe();

  }

  sendMessage(): void {
    console.log(TAG + ' sendMessage(): ' + this.textarea);
    this.chat.sendMsg({ author: this.author, type: 'Text', message: this.textarea });
    this.textarea = '';
  }

  clickDate(): void {
    console.log(TAG + ' clickDate()');
    this.chat.sendCommand('Date');
  }

  clickMap(): void {
    console.log(TAG + ' clickMap()');
    this.chat.sendCommand('Map');
  }

  clickRate(): void {
    console.log(TAG + ' clickRate()');
    this.chat.sendCommand('Rate');
  }
}
