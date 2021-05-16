import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="content" role="main">\n' +
    '  <app-chat></app-chat>\n' +
    '</div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {
  }
}
