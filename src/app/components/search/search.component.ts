import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search: string;
  films: any[] = [];

  constructor( public _fs: FilmsService,
               public router: ActivatedRoute ) {

    this.router.params.subscribe(params => {
      console.log('params', params);
      if (params['text']) {
        this.search = params['text'];
        this.searchMovie();
      }
    });
  }

  ngOnInit() {
  }

  searchMovie() {

    if (!this.search) {
      return;
    }

    this._fs.searchFilm(this.search)
            .subscribe (filmData => this.films = filmData);


  }

}
