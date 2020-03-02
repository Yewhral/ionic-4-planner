import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors-info',
  templateUrl: './errors-info.component.html',
  styleUrls: ['./errors-info.component.scss'],
})
export class ErrorsInfoComponent {

  @Input('errors') errors: Array<string> = null;

  constructor() { }


}
