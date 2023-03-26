// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class CourseModule { }

export interface CourseModule {
  id: string,
  headline: string,
  description: string,
  chapters?: Array<any>
  summary: Array<string>
}
