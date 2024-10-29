import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>list-movie works!</p>`,
  styleUrl: './list-movie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMovieComponent { }
