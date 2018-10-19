import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private apiKey = '7a119e72efe4ee8cdf671ce8d74735ad';
  private movieDbUrl = 'https://api.themoviedb.org/3';

  films: any[] = [];

  constructor(private _httpCli: HttpClient) { }

  getInTheaters() {
    const url = `${this.movieDbUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this._httpCli.jsonp(url, '')
      .pipe(map(
        res => res['results']
      ));
  }

  getMostRatedFilms() {
    const url = `${this.movieDbUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this._httpCli.jsonp(url, '')
      .pipe(map(
        res => res['results']
      ));
  }

  searchFilm(term: string) {
    const url = `${this.movieDbUrl}/search/movie?query=${term}
                      &sort_by=popularity.desc&api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this._httpCli.jsonp(url, '')
      .pipe(map(
        res => res['results']
      ));
  }

  getFilmById(id: string) {
    const url = `${this.movieDbUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US&callback=JSONP_CALLBACK`;
    return this._httpCli.jsonp(url, '')
      .pipe(map(
        res => res
      ));
  }

  getFilmsForKids() {
    const url = `${this.movieDbUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity
                .desc&include_adult=false&include_video=false&page=1&callback=JSONP_CALLBACK`;
    return this._httpCli.jsonp(url, '')
      .pipe(map(
        res => {
          this.films = res['results'];
          return this.films;
        }

      ));
  }


}
