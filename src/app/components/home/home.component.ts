import { Component, OnInit } from '@angular/core';
// services
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  inTheaters: any;
  mostRated: any;
  mostRatedKids: any;


  constructor( public _fs: FilmsService) {

    this._fs.getInTheaters()
            .subscribe( data => this.inTheaters = data);

    this._fs.getMostRatedFilms()
            .subscribe( data => this.mostRated = data);

    this._fs.getFilmsForKids()
            .subscribe( data => this.mostRatedKids = data);




  }

  ngOnInit() {
  }

}
