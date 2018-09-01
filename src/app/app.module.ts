import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PipesModule} from './shared/pipes/pipes.module';
import {MovieService} from './shared/services/movie.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PipesModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
