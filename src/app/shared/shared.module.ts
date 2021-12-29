import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyPipe } from './utils/pipes/is-empty.pipe';
import { CustomDatePipe } from './utils/pipes/custom-date.pipe';
import { LoaderScreenComponent } from './components/loader-screen/loader-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IsEmptyPipe,
    CustomDatePipe,
    LoaderScreenComponent,

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [IsEmptyPipe, CustomDatePipe, LoaderScreenComponent]
})
export class SharedModule { }
