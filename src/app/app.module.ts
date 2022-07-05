import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainComponent } from './main/main.component';
import { mainReducer } from './store/main.state';
import { ApiCompComponent } from './api-comp/api-comp.component';
import { ApiService } from './api-comp/api.service';
import { HttpClientModule } from '@angular/common/http' 
import { reducerToDo } from './store/api.state';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ApiCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ contador: mainReducer, stateToDos: reducerToDo }, {}),
    EffectsModule.forRoot([ ApiService ])
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
