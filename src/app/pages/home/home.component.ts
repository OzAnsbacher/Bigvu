import { Component, OnInit } from '@angular/core';
import { CoursesModule } from 'src/app/models/courses.module';
import { ChaptersService } from 'src/app/services/chapters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private chaptersService: ChaptersService) { }

  courses$: any
  title = 'BIGVU 101  Crash Course'
  subtitle = `Zero editing experience to pro — your journey starts here. 
  Watch step-by-step video lessons how to make videos with impact.`
  color=['#28B3F7','#00EA3B','#F79F28', 'yellow']

  ngOnInit(): void {
    this.chaptersService.get().subscribe((courses)=>{
      this.courses$=courses
      
    })
 
  }


}
