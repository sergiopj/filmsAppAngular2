import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilm'
})
export class ImageFilmPipe implements PipeTransform {



  transform(film: any, poster: boolean = false): any {


    const url = 'http://image.tmdb.org/t/p/w500';

    if (film.poster_path && poster) {
      return url + film.poster_path;
    } else if (film.backdrop_path) {
      return url + film.backdrop_path;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
