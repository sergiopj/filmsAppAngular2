import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {

  film: any;
  page: string;

  constructor(public activatedRoute: ActivatedRoute,
              public _fs: FilmsService ) {

    this.activatedRoute.params.subscribe( params => {
      this.page = params['page'];
      this._fs.getFilmById(params['id'])
              .subscribe( data => {
                this.film = data;
              });
    });



  }

  ngOnInit() {
  }

}
