import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnChanges {


  @Input() course: any
  @Input() mainColor!: string

  svg!: SafeHtml;
  svgDrawing!: SafeHtml;
  svgArrow!: SafeHtml;

  numVideo = 5
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
console.log(this.course);

    // this.mainColor = this.getRandomBrightColor()
    this.svg = this.sanitizer.bypassSecurityTrustHtml(`<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="-2.49133" y="-6" width="24.9199" height="24" fill="white"/>
    </svg>
    `);
    this.svgDrawing = this.sanitizer.bypassSecurityTrustHtml(`<svg width="184" height="102" viewBox="0 0 184 102" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.09 -68.9369C54.1999 -69.9246 47.4793 -59.085 42.7773 -53.002C29.5087 -35.8361 17.5473 -17.229 8.2622 2.39868C6.63984 5.82818 -4.13549 24.3999 6.94105 23.0397C20.6197 21.3601 34.908 8.62635 44.6765 -0.160821C60.9818 -14.8282 75.9347 -31.6429 89.1828 -49.1214C90.4265 -50.7623 100.993 -67.3858 90.8342 -62.7446C85.3489 -60.2386 80.6187 -54.9045 76.6318 -50.6076C68.9552 -42.3339 61.9319 -33.4026 55.6585 -24.0219C43.2816 -5.51451 31.0378 16.9874 28.4924 39.47C27.2067 50.8255 37.8995 48.1776 44.8003 43.6808C50.9495 39.6739 55.7593 33.5219 60.6954 28.2C68.9231 19.3293 77.1324 10.4578 84.9303 1.20149C96.4345 -12.4543 110.979 -28.466 116.638 -45.8602C120.845 -58.792 105.226 -43.0756 103.137 -40.6999C87.0805 -22.435 72.3417 -1.4799 61.645 20.3977C55.7107 32.5348 50.738 45.3806 47.6078 58.5424C47.1594 60.4277 44.3159 69.7492 47.4426 71.4637C51.0072 73.4183 59.1982 67.3504 61.6037 65.8906C70.845 60.2826 79.4916 53.829 87.2423 46.2816C97.4634 36.3287 106.398 25.0669 115.358 13.999C124.692 2.47014 134.234 -9.05792 141.781 -21.8752C143.302 -24.4587 147.408 -29.9726 147.148 -33.3517C146.904 -36.5302 141.1 -31.0076 138.643 -28.9758C117.829 -11.7615 97.636 8.69187 84.2285 32.2869C78.714 41.9914 74.3343 52.5388 71.7601 63.4137C70.4121 69.1082 68.0839 78.4297 71.9252 83.8071C78.3817 92.8452 97.2767 74.8967 100.908 71.0096C108.601 62.7743 114.636 52.9445 121.221 43.8459C128.967 33.1425 137.052 22.7303 145.167 12.3064C151.563 4.08978 158.384 -4.16696 162.92 -13.6188C164.705 -17.3396 167.28 -22.9251 166.47 -27.2419C164.864 -35.8099 145.58 -11.7076 144.671 -10.4814C126.909 13.4881 114.155 42.8962 106.482 71.6701C105.714 74.5484 97.603 102.99 108.216 99.742C113.847 98.0182 118.785 91.11 122.418 87.0271C130.228 78.2489 137.401 68.9556 144.465 59.5744C157.905 41.7243 171.505 23.4824 181.829 3.59586C184.835 -2.19631 187.342 -8.17461 189.632 -14.2793C189.746 -14.585 192.542 -20.3435 189.797 -18.325C185.146 -14.9054 181.337 -9.8046 177.783 -5.36237C169.67 4.77731 161.873 15.2938 154.91 26.2598C145.123 41.6725 134.763 61.1779 134.763 79.9678C134.763 92.1376 143.977 94.0444 153.548 88.8848C167.402 81.416 178.599 68.5925 190.912 58.8726" stroke="${this.mainColor}" stroke-width="4" stroke-linecap="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_956" x1="189.774" y1="-66.8072" x2="3.22617" y2="-66.8072" gradientUnits="userSpaceOnUse">
    <stop stop-color="#28B3F7"/>
    <stop offset="1" stop-color="#506AFF"/>
    </linearGradient>
    </defs>
    </svg>`)
    this.svgArrow = this.sanitizer.bypassSecurityTrustHtml(`<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L10 10L2 18" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `)

  }

  ngOnChanges(): void {
  }

  getRandomBrightColor(): string {
    // Generate random values for red, green, and blue components
    const r = Math.floor(Math.random() * 156) + 100; // 100-255
    const g = Math.floor(Math.random() * 156) + 100; // 100-255
    const b = Math.floor(Math.random() * 156) + 100; // 100-255

    // Combine the components into a single color value
    const color = `rgb(${r}, ${g}, ${b})`;

    return color;
  }


}
