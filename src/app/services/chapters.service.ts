import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { CourseModule } from '../models/course.module';
import { CoursesModule } from '../models/courses.module';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  constructor(private httpService: HttpService) { }
  private _courses$ = new BehaviorSubject<any>({});
  public courses$ = this._courses$.asObservable();


  get():Observable<CoursesModule> {
    return this.httpService.get('/list')
  }

  getCourse(id: string):Observable<CourseModule> {
    return this.httpService.getCourse('/' + id)
  }

}

