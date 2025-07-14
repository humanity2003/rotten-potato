import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  trendingMovies: any[] = [];
  theatreMovies: any[] = [];
  popularMovies: any[] = [];

  constructor(private http: HttpClient, private route:Router){}

  ngOnInit(){
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  getTrendingMovies(){
    this.http.get<any>('http://localhost:4200/assets/data/trending-movies.json').subscribe(
      (movies) => {
        this.trendingMovies = movies;
        console.log('Trending Movies:', this.trendingMovies);
      },
      (error) => {
        console.error('Error fetching trending movies:', error);
      }
    )
  }
  getTheatreMovies(){
    this.http.get<any>('http://localhost:4200/assets/data/theatre-movies.json').subscribe(
      (movies) => {
        this.theatreMovies = movies;
        console.log('Theatre Movies:', this.theatreMovies);
      },
      (error) => {
        console.error('Error fetching theatre movies:', error);
      }
    )
  }

  getPopularMovies(){
    this.http.get<any>('http://localhost:4200/assets/data/popular-movies.json').subscribe(
      (movies) => {
        this.popularMovies = movies;
        console.log('Popular Movies:', this.popularMovies);
      },
      (error) => {
        console.error('Error fetching popular movies:', error);
      }
    )
  }

  goToMovie(type: string, movieId: number) {
    console.log('Navigating to movie with type:', type, 'and ID:', movieId);
    this.route.navigate(['/movie', type, movieId]);

  }

  x(){
    console.log('x function called');
  }
}
