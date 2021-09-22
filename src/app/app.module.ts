import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { ShowMovieComponent } from './movie/show-movie/show-movie.component';
import { AddEditMovieComponent } from './movie/add-edit-movie/add-edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ShowMovieComponent,
    AddEditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
