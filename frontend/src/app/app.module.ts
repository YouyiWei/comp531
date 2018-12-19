import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterationComponent } from './auth/registeration/registeration.component';
import { MainComponent } from './main/main.component';
import { FollowingComponent } from './main/following/following.component';
import { HeadlineComponent } from './main/headline/headline.component';
import { PostsComponent } from './main/posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }, {
    path: 'auth',
    component: AuthComponent
  }, {
    path: 'main',
    component: MainComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterationComponent,
    MainComponent,
    FollowingComponent,
    HeadlineComponent,
    PostsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
