import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { catchError, tap, Observable } from 'rxjs';
import { CourseModule } from '../models/course.module';
import { CoursesModule } from '../models/courses.module';


@Injectable({
  providedIn: 'root'
})

// 'Authorization':  'bigvu:interview'

export class HttpService {

  data: string = 'bigvu:interview'
  BASE_URL = '/course'
  // BASE_URL = 'http://interviews.bigvu.tv/course/list'
  username='bigvu'
  password='interview'

   private headers = new HttpHeaders({
      'Authorization': `Basic ${window.btoa(`${this.username}:${this.password}`)}`
  });

  constructor(private http: HttpClient) { }

  public get(endpoint: string): Observable<CoursesModule> {
           return this.http.get<CoursesModule>(this.BASE_URL + endpoint, { headers: this.headers })
      .pipe(tap({ error: (error) => console.log(error) }));
  }
  public getCourse(endpoint: string):Observable<CourseModule> {
   
           return this.http.get<CourseModule>(this.BASE_URL + endpoint, { headers: this.headers })
      .pipe(tap({ error: (error) => console.log(error) }));
  }
}



// data: string = 'bigvu:interview'
// BASE_URL = 'https://interviews.bigvu.tv/course/list'
// username='bigvu'
// password='interview'


// private headers = new HttpHeaders({
//   'Content-Type':  'application/json',
//   'Authorization': `${this.username}:${this.password}`
// });

// constructor(private http: HttpClient) { }

// public get(endpoint: string) {
//   console.log(this.BASE_URL + endpoint);
  
//   return this.http.get<any>(this.BASE_URL + endpoint, { headers: this.headers })
//     .pipe(tap({ error: (error) => console.log(error) }));
// }
