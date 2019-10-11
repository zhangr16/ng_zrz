import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

// 引入服务
import { StorageService } from './services/storage.service';
import { TransitionComponent } from './components/transition/transition.component';
import { RequesterComponent } from './components/requester/requester.component';
import { RoutefaterComponent } from './components/routefater/routefater.component';
import { SonComponent } from './components/son/son.component';
import { Son2Component } from './components/son2/son2.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    SearchComponent,
    TransitionComponent,
    RequesterComponent,
    RoutefaterComponent,
    SonComponent,
    Son2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
