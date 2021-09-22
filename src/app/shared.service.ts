import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly Url = environment.baseUrl;

readonly APIUrl = this.Url + "/api";

  constructor(private http:HttpClient) { }


  getMovieList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Movie');
  }

  addMovie(val:any){
    return this.http.post(this.APIUrl+'/Movie',val);
  }

  updateMovie(val:any){
    return this.http.put(this.APIUrl+'/Movie',val);
  }

  deleteMovie(val:any){
    return this.http.delete(this.APIUrl+'/Movie/'+val);
  }


  validateForm(val:any)
  {
    var formValid = true;
    Object.keys(val).forEach(e => formValid = (val[e].toString() != "") && formValid);
    return formValid;
  }
}
