import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SerieComponent } from './pages/serie/serie.component';
import { GameComponent } from './pages/game/game.component';
import { RecommendationItemComponent } from './components/recommendation-item/recommendation-item.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BookComponent, MovieComponent, SerieComponent, GameComponent, RecommendationItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}