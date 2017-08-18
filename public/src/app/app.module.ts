import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { ListComponent } from './main/list/list.component';
import { NewComponent } from './main/new/new.component';
import { TriviaService } from "./trivia.service";
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent,
    ListComponent,
    NewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
