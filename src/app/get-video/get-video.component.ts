import { Component } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { video } from '../model/video';

@Component({
  selector: 'app-get-video',
  templateUrl: './get-video.component.html',
  styleUrls: ['./get-video.component.css']
})
export class GetVideoComponent {
  constructor(private service:VideoServiceService,private http:HttpClient,private route: ActivatedRoute,private router:Router) { }

  
  listvideo!:any[]
  ngOnInit(): void {
    this.service.get().subscribe()
  }
}
