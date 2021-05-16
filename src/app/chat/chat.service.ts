import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { CommandType, Message } from './message.model';

const TAG = '[ChatService]: ';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages$: ReplaySubject<Message> = new ReplaySubject();
  constructor(private socket: Socket) {
    setTimeout(() => {
      console.log(TAG + 'setTimeout');
      this.sendMsg({
        author: 'Book',
        type: 'Text',
        message: 'Don’t Make Me Think a classic–with updated examples'
      });
    }, 5000);
  }

  sendMsg(msg: Message): void {
    console.log(TAG + 'sendMsg: ');
    this.messages$.next(msg);
    // this.socket.emit('message', msg);
  }
  sendCommand(commandType: CommandType): void {
    console.log(TAG + 'sendCommand: ' + commandType);
    if (commandType === 'Date') {
      this.messages$.next({
        type: commandType,
        data: new Date()
      });
    } else if (commandType === 'Map') {
      this.messages$.next({
        type: commandType,
        data: { lat: 52.09829315131093, lng: 23.717952058298575 }
      });
    } else if (commandType === 'Rate') {
      this.messages$.next({
        type: commandType,
        data: [1, 2]
      });
    }
    // this.messages$.next(msg);
    // this.socket.emit('message', { author: 'ottonova bot', command: { type: commandType}});
  }
  get messages(): Observable<Message> {
    console.log(TAG + 'messages$');
    return this.messages$.asObservable();
    // return this.socket.fromEvent('message').pipe(map((data: { msg: Message}) => data.msg));
  }
}
