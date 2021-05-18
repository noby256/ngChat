import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="btn-panel">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
  `
})
export class RatingComponent implements OnInit {
  @Input() i: number;
  @Input() j: number;

  ngOnInit(): void {
    console.log('ngOnInit()');
  }
}
