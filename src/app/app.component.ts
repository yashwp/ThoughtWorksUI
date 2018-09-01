import {Component, OnInit} from '@angular/core';
import {Movie} from './shared/models/movie';
import {MovieService} from './shared/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movieList: Movie[] = [];
  searchText = '';
  direction = 1;
  isReverse = false;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movieList = [...movies];
    });
  }

  getFormattedText(str: string, by: any) {
    return str.split(by).slice(0, 4).join(', ');
  }

  sortByYear() {
    this.isReverse = !this.isReverse;
    this.direction = this.isReverse ? 1 : -1;
  }
}
