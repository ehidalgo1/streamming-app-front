import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  create(movie: Movie):Observable<Movie>{
    return this.http.post<Movie>('http://localhost:8080/movie', movie);
  }

}
