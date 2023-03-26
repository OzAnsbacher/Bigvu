import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';

import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './cmp/course/course.component';
import { VideoPlayerComponent } from './cmp/video-player/video-player.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChaptersComponent,
    CourseComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
