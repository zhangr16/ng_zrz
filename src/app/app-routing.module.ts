import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component"
import { NewsComponent } from "./components/news/news.component"
import { SearchComponent } from "./components/search/search.component"
import { RoutefaterComponent } from "./components/routefater/routefater.component"
import { SonComponent } from "./components/son/son.component";
import { Son2Component } from "./components/son2/son2.component";

const routes: Routes = [
  {
    path: 'father', component: RoutefaterComponent, children: [
      { path: 'son', component: SonComponent },
      { path: 'son2', component: Son2Component },
      {path: '**', redirectTo: 'son2'}
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'search/:o', component: SearchComponent },
  { path: 'son/:aid', component: SonComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
