import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieComponent } from './components/movie/movie.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
 {path: '', component: LandingpageComponent},
 { path: 'login', component: LoginComponent },
 { path: 'home', component: HomeComponent},
 { path : 'header', component: HeaderComponent },
 { path: 'movie/:type/:id', component: MovieComponent }, // Dynamic route for movie details
 { path: '**', redirectTo: '' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
