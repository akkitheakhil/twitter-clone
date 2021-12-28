import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyPipe } from './utils/pipes/is-empty.pipe';
import { CustomDatePipe } from './utils/pipes/custom-date.pipe';



@NgModule({
  declarations: [
    IsEmptyPipe,
    CustomDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [IsEmptyPipe, CustomDatePipe]
})
export class SharedModule { }
