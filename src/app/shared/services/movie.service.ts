import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get('http://starlord.hackerearth.com/movieslisting');
  }

}
