import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { AllAlbumsComponent } from './components/albums';
import { AllCommentsComponent } from './components/comments';
import { AllPhotosComponent } from './components/photos';
import { AllPostsComponent } from './components/posts';
import { AllTodosComponent } from './components/todos';
import { AllUsersComponent } from './components/users';
import { App404Component } from './components/errors';


import { TopNavComponent } from './shared/topnav';
import { SidebarComponent } from './shared/sidebar';

import { RestService } from './services';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidebarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AllAlbumsComponent,
    AllCommentsComponent,
    AllPhotosComponent,
    AllPostsComponent,
    AllTodosComponent,
    AllUsersComponent,
    App404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
      )
  ],
  providers: [
    RestService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
