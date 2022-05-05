import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { LightswitchComponent } from './lightswitch/lightswitch.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LightswitchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //imported the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
