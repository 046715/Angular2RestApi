import { ErrorHandler } from '@angular/core';
import { PostAddService } from './../services/postService/add.service';
import { PostDeleteService } from './../services/postService/delete.service';
import { PostGetService } from './../services/postService/get.service';
import { PostUpdateService } from './../services/postService/update.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppErrorHandler } from '../Common/app-error-handler';
import { MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/notFound/pageNotFound.Component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.Component';
import { UpvoteDownvoteComponent } from './components/upvote/upvoteDownvote.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: PostsComponent },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: '**', component: PageNotFoundComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    UpvoteDownvoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostAddService,PostDeleteService,PostGetService, PostUpdateService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
