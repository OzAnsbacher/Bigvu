import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModule } from 'src/app/models/course.module';
import { ChaptersService } from 'src/app/services/chapters.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private chaptersService: ChaptersService, private sanitizer: DomSanitizer) { }

  course!: CourseModule
  numChapters!: number | undefined
  viewChapters: number | undefined = 0
  svgMedal!: SafeHtml;
  svgArrow!: SafeHtml;
  svgV!: SafeHtml;
  numCurrentChapter: number = 0
  videoLength = '1:00'

  ngOnInit(): void {

    this.route.params.subscribe(({ id }) => {
      this.chaptersService.getCourse(id).subscribe((course) => {
        this.course = course
        this.numChapters = this.course.chapters?.length
      })
    });



    this.svgMedal = this.sanitizer.bypassSecurityTrustHtml(`<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 7C14 3.1 10.9 0 7 0C3.1 0 0 3.1 0 7C0 9 0.8 10.7 2.1 12L1 20L7 17.3L13 20L11.9 12C13.2 10.7 14 9 14 7ZM11.2 17.5L7 15.6L2.8 17.5L3.5 13C4.5 13.6 5.7 14 7 14C8.3 14 9.5 13.7 10.5 13L11.2 17.5ZM10.3 11.4C9.4 12.1 8.2 12.5 7 12.5C5.8 12.5 4.6 12.1 3.7 11.4C3.2 11 2.7 10.5 2.4 10C1.9 9.2 1.5 8.1 1.5 7C1.5 4 4 1.5 7 1.5C10 1.5 12.5 4 12.5 7C12.5 8.1 12.2 9.1 11.6 10C11.3 10.5 10.8 11 10.3 11.4Z" fill="#253658"/>
    </svg>
    
    `);
    this.svgArrow = this.sanitizer.bypassSecurityTrustHtml(`<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.1875 4.67524C7.4375 4.81958 7.4375 5.18042 7.1875 5.32476L1.1875 8.78886C0.9375 8.9332 0.625001 8.75278 0.625001 8.4641L0.625001 1.5359C0.625001 1.24722 0.937501 1.0668 1.1875 1.21114L7.1875 4.67524Z" stroke="#253658" stroke-width="1.25" stroke-linejoin="round"/>
    </svg>
    `)
    this.svgV = this.sanitizer.bypassSecurityTrustHtml(`<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6.65803L6.22832 12L17 1" stroke="#00D096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    `)
  }

  changeChapter(idx: number) {
    this.numCurrentChapter = idx
  }

  isFinish(idx: string) {
    const savedTime = localStorage.getItem(idx);
    if (savedTime !== null && parseInt(savedTime) > 10) {
      return true
    } else {
      return false
    }
  }

}
