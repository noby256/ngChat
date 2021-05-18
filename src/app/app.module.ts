import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MapImageComponent } from './chat/map-image.component';
import { DayButtonsComponent } from './chat/day-buttons.component';
import { RatingComponent } from './chat/rating.component';

@NgModule({
    declarations: [
      AppComponent,
      ChatComponent,
      DayButtonsComponent,
      MapImageComponent,
      RatingComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot({ url: 'https://demo-chat-server.on.ag/', options: {} })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
