import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { catchError, tap, Observable } from 'rxjs';


import { CourseModule } from '../models/course.module';
import { CoursesModule } from '../models/courses.module';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.BASE_URL = '/course';
    } else {
      this.BASE_URL = '/api/';
    }
  }

  BASE_URL
  username = 'bigvu'
  password = 'interview'

  private headers = new HttpHeaders({
    'Authorization': `Basic ${window.btoa(`${this.username}:${this.password}`)}`
  });

  public get(endpoint: string): Observable<CoursesModule> {
    return this.http.get<CoursesModule>(this.BASE_URL + endpoint, { headers: this.headers })
      .pipe(tap({ error: (error) => console.log(error) }));
  }
  public getCourse(endpoint: string): Observable<CourseModule> {

    return this.http.get<CourseModule>(this.BASE_URL + endpoint, { headers: this.headers })
      .pipe(tap({ error: (error) => console.log(error) }));
  }
}



