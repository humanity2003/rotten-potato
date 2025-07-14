import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

 type: string = '';
 id: string = '';
 url: string = '';
 movies: any[] = [];
 movie: any ;

 constructor(private route: ActivatedRoute, private http: HttpClient) {}

 ngOnInit() {
   this.route.params.subscribe(params => {
     this.type = params['type'];
     this.id = params['id'];
   });
   if(this.type==='popular'){
     this.url = `http://localhost:4200/assets/data/popular-movies.json`
   }
   if(this.type==='theatre'){
     this.url = `http://localhost:4200/assets/data/theatre-movies.json`
   }
   if(this.type==='trending'){
     this.url = `http://localhost:4200/assets/data/trending-movies.json`
   }
   console.log(this.type, this.id, this.url);
   this.getMovie();
  }

  getMovie(): void {
    this.http.get<any[]>(this.url).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      let index = this.movies.findIndex(movie => movie.id == this.id);
      console.log(index);
    if(index !== -1) {
      this.movie = this.movies[index];
    }
  });
 }
}
