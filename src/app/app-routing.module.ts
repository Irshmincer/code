import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
 { path:'home', component:HomeComponent},
  {path:'character' , component:CharacterComponent},
  {path:'comics' , component:ComicsComponent},
  {path:'series', component:SeriesComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
