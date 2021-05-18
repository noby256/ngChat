import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-buttons',
  template: `
    <div *ngIf="!chosenDay" class="btn-panel">
      <button *ngFor="let day of days" (click)="clickDay(day)" class="btn btn-info" role="button">
        {{day}}
      </button>
    </div>
    <div *ngIf="chosenDay">
      <span>{{chosenDay}}</span>
    </div>
  `
})
export class DayButtonsComponent implements OnInit {
  @Input() startDate: Date;
  days: string[];
  chosenDay: string | undefined;

  ngOnInit(): void {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let dayIndex = this.startDate.getDay() - 1; // = -1, 5
    dayIndex = dayIndex === -1 || dayIndex === 5 ? 0 : dayIndex;
    console.log('dayIndex: ' + dayIndex);
    this.days = [...days.slice(dayIndex), ...days.slice(0, dayIndex)];
    console.log('dayIndex: ' + dayIndex);
  }

  clickDay(day: string): void {
    this.chosenDay = day;
  }
}
// src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAU0uimW2neecwWqcOBRxWKI6JbdLIe4ao&location={{lng}},{{lng}}">
