import { Component } from '@angular/core';
import * as moment from 'moment';

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
  terms: term[] = [];
  studentsCount: number = 8;
  breakLength: number = 10;
  startDate: string = "2020-10-10T10:25:00.000";
  endDate: string = "2020-10-10T13:30:00.000";
  errors: Array<string> = null;

  constructor() {}

  ngOnInit() {
    this.calculateTerms();
  };

  validateFields = () => {
    const errorsList = []
    if(isNaN(this.studentsCount) || this.studentsCount < 0 || this.studentsCount > 30) {
      errorsList.push("Students count must be greater than zero and less than 30");
    }
    if(isNaN(this.breakLength) || this.breakLength < 0) {
      errorsList.push("Break can't be shorter than 0");
    }
    if(moment(this.endDate).isBefore(this.startDate)) {
      errorsList.push("End date can't be before start date")
    }
    this.errors = errorsList;
    return errorsList;
  };

  calculateTerms = () => {
    const errors = this.validateFields();
    if(errors.length) return null;
    const termsList = [];
    const breaksAmount = 1;
    const recordsAmount = +this.studentsCount + breaksAmount;
    const breakTime = +this.studentsCount % 2 === 0
      ? this.studentsCount / 2
      : ((+this.studentsCount + 1) / 2);
    let currentTime = moment(this.startDate);
    const availableTimeInMinutes = moment(this.endDate).diff(moment(this.startDate), 'minutes');
    const timeForOneStudent = (availableTimeInMinutes - (breaksAmount * this.breakLength)) / this.studentsCount;
 
    for(let i = 0; i < recordsAmount; i++) {
      if(i === breakTime) {
        termsList.push({ date: moment(currentTime).format('HH:mm'), break: true })
        currentTime.add(this.breakLength, 'minutes')
      } else {
        termsList.push({ date: moment(currentTime).format('HH:mm')})
        currentTime.add(timeForOneStudent, 'minutes')
      }
    }
    
    this.terms = termsList;
  };

}