import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ErrorsInfoComponent } from './errors-info.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [ErrorsInfoComponent],
  exports: [ErrorsInfoComponent],
})
export class ErrorsInfoModule {}
