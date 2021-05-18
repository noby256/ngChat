import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="content" role="main">\n' +
    '  <app-chat></app-chat>\n' +
    '</div>'
})
export class AppComponent {
  title: string;

  constructor(){ }
}
