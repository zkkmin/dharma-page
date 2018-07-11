import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TracksComponent } from './tracks/tracks.component';
import { AppComponent } from './app.component';
import { MonksComponent } from './monks/monks.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    MonksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
