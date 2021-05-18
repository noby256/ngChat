import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-image',
  template: `
    <iframe
      width="450"
      height="250"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAU0uimW2neecwWqcOBRxWKI6JbdLIe4ao&location={{lat}},{{lng}}">
    </iframe>
  `
})
export class MapImageComponent {
  @Input() lat: string;
  @Input() lng: string;
}
// src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAU0uimW2neecwWqcOBRxWKI6JbdLIe4ao&location={{lng}},{{lng}}">
