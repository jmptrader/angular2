import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app';
import { HeroDetailComponent } from './hero-detail';
import { HeroesComponent }     from './heroes';
import { DashboardComponent }     from './dashboard';
import { HeroService }         from './hero.service';
import { routing } from './app.routing';

@NgModule({
  imports:[ 
  			BrowserModule,
  			FormsModule,
  			HttpModule,
  			routing
  			],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent ,DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    HeroService
  ]
})
export class AppModule { }