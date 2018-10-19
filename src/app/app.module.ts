import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';
import { FormsModule } from '@angular/forms';

// routes
import { APP_ROUTING } from './app.routes';
import { SearchComponent } from './components/search/search.component';

// services
import { FilmsService } from './services/films.service';
// pipes
import { ImageFilmPipe } from './pipes/image-film.pipe';
import { SlideComponent } from './components/home/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FilmComponent,
    SearchComponent,
    ImageFilmPipe,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
