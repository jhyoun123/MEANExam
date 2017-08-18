import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { ListComponent } from './main/list/list.component';
import { NewComponent } from './main/new/new.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lets_play', component: TestComponent },
  { path: 'home', component: MainComponent, children:[
    { path: 'list', component: ListComponent },
    { path: 'new_question', component: NewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
