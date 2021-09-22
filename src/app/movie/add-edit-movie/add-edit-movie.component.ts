import { Component, OnInit, Input } from '@angular/core';
import { SharedService}  from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() movie:any;
  MovieId:string;
  MovieName:string;
  MovieType:string;

  ngOnInit(): void {
    this.MovieId=this.movie.MovieId;
    this.MovieName=this.movie.MovieName;
    this.MovieType = this.movie.MovieType;
  }

  addMovie(){
    var val = {MovieId:this.MovieId,
              MovieName:this.MovieName,
              MovieType:this.MovieType};

    if (val.MovieName == "")
    {
      alert("Tytuł jest wymagany!");
      return;
    }

    // if (!this.service.validateForm(val))
    // {
    //   alert("All fields are required!");
    //   return;
    // }

    this.service.addMovie(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMovie(){
    var val = {MovieId:this.MovieId,
              MovieName:this.MovieName,
              MovieType:this.MovieType};

    if (val.MovieName == "")
    {
      alert("Tytuł jest wymagany!");
      return;
    }
    
    // if (!this.service.validateForm(val))
    // {
    //   alert("Wszystkie pola są wymagane!");
    //   return;
    // }

    this.service.updateMovie(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
