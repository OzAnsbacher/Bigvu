import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  @Input() chapters!: any

  currentChapter = ""

  ngOnInit() {
    console.log(this.chapters);
    const x = 0
    this.currentChapter =this.chapters[x].asset.resource.stream.url
  }

  ngOnChanges() {
  }
}
