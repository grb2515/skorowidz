import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  constructor(private service:SharedService) { }

  MovieList:any=[];

  ModalTitle:string;
  ActivateAddEditMovieComp:boolean=false;
  movie:any;

  MovieNameFilter:string="";
  MovieTypeFilter:string="";
  MovieListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshMovieList();
  }

  addClick(){
    this.movie={
      MovieId:0,
      MovieName:"",
      MovieType:""
    }
    this.ModalTitle="Dodaj film";
    this.ActivateAddEditMovieComp=true;

  }

  editClick(item){
    this.movie=item;
    this.ModalTitle="Edytuj film";
    this.ActivateAddEditMovieComp=true;
  }

  deleteClick(item){
    if(confirm('Na pewno usunąć??')){
      this.service.deleteMovie(item.MovieId).subscribe(data=>{
        alert(data.toString());
        this.refreshMovieList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditMovieComp=false;
    this.refreshMovieList();
  }


  refreshMovieList(){
    this.service.getMovieList().subscribe(data=>{
      this.MovieList=data;
      this.MovieListWithoutFilter=data;
    });
  }

  FilterFn(){
    var MovieNameFilter = this.MovieNameFilter;
    var MovieTypeFilter = this.MovieTypeFilter;

    this.MovieList = this.MovieListWithoutFilter.filter(function (el){
        return el.MovieName.toString().toLowerCase().includes(
          MovieNameFilter.toString().trim().toLowerCase()
        )
        &&
        (el.MovieType ?? "").toString().toLowerCase().includes(
          MovieTypeFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.MovieList = this.MovieListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
