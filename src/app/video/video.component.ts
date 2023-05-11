import { Component } from '@angular/core';
import { video } from '../model/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  listVideo!: video[];
  constructor() {}

  ngOnInit(): void {
    this.listVideo=[
      {id:1 , title:"t-title",genre:2,public:500,nbrShared:5},
      {id:1 , title:"t-title",genre:2,public:500,nbrShared:5},
      {id:1 , title:"t-title",genre:2,public:500,nbrShared:5},
    ]
  }
}
