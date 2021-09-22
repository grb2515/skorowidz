import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MovieComponent} from './movie/movie.component';

const routes: Routes = [
{path:'movie',component:MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 