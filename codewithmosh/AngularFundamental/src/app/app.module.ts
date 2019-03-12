import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorsService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
