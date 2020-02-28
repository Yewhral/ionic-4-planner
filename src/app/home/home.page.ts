import { Component } from '@angular/core';

interface term {
  date: string,
  break?: boolean,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  terms: term[] = [
    { date:"10:25" },
    { date: "11:00" },
    { date: "12:00", break: true },
    { date: "13:00" },
    { date: "15:00" }
  ];
  studentsCount: number = 8;
  breakLength: number = 10;
  startDate: string = "2020-10-10T10:25:00.000";
  endDate: string = "2020-10-10T13:30:00.000";

  constructor() {}

}