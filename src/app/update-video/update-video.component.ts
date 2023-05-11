import { Component } from '@angular/core';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css']
})
export class UpdateVideoComponent {

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  getPublicationById(id: any): void {
    this.serice.getForumById(id)
      .subscribe();
  }
  onSubmit(form:any){
    let body={
      "id":this.video.id,
      "title":this.video.title,
      "genre":this.video.genre,
      "public":this.video.public,
      "nbrShared":this.video.nbrShared,
    }
     this.service.addForum(body).subscribe()
  }
}
