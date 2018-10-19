import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmComponent } from './components/film/film.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES = [
    { path: 'home', component: HomeComponent},
    { path: 'film/:id/:page', component: FilmComponent},
    { path: 'search', component: SearchComponent},
    { path: 'search/:text', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
