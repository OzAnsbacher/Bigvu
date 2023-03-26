import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges, OnDestroy {
  // export class VideoPlayerComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  elapsedSeconds: number = 0; // initialize elapsed time to 0
  secondsLeft!: number
  currentChapterUrl = ""
  savedTime: number = 0;
  isStart = false
  isInit = true
  currentChapter: any

  constructor() { }

  @Input() chapters!: any
  @Input() numCurrentChapter!: number


  @ViewChild('myVideo') video!: ElementRef;

  ngOnInit() {
    this.currentChapter = this.chapters[this.numCurrentChapter]
    this.currentChapterUrl = this.currentChapter.asset.resource.stream.url
    this.secondsLeft = this.currentChapter.asset.resource.duration
  }

  ngOnChanges() {
    this.isStart = false
    if (!this.isInit) {
      localStorage.setItem(this.currentChapter.id, JSON.stringify(this.elapsedSeconds))
      this.currentChapterUrl = this.chapters[this.numCurrentChapter].asset.resource.stream.url
      this.video.nativeElement.src = this.currentChapterUrl
      this.video.nativeElement.load();
      this.currentChapter = this.chapters[this.numCurrentChapter]
    } else {
      this.isInit = false
    }

  }

  onTimeUpdate() {
    this.elapsedSeconds = Math.floor(this.video.nativeElement.currentTime);
  }

  loadTime() {
    const savedTime = localStorage.getItem(this.currentChapter.id);
    if (savedTime !== null) {
      this.savedTime = JSON.parse(savedTime);
    }
  }

  startVideo() {
    if (this.isStart) return
    this.loadTime()
    this.video.nativeElement.currentTime = this.savedTime;
    this.isStart = true
  }

  ngOnDestroy() {
    localStorage.setItem(this.currentChapter.id, JSON.stringify(this.elapsedSeconds));
  }
}
