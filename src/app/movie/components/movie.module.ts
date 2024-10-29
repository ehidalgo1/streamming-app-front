import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CapitalizeFirstPipe } from '../../shared/pipes/CapitalizeFirst.pipe';
import { CapitalizeNamesPipe } from '../../shared/pipes/CapitalizeNames.pipe';



@NgModule({
  declarations: [
    CreateMovieComponent,
    CapitalizeFirstPipe,
    CapitalizeNamesPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateMovieComponent
  ]
})
export class MovieModule { }
