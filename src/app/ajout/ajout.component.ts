import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit{
  
  constructor(private service:VideoServiceService) { }
  id!: any
  title!:any
  genre!:any
  public !:any
  nbrShared!:any
   

  ngOnInit(): void {
  }

  onSubmit(form:any){
    let body={
      "title":this.title,
      "genre":this.genre,
      "public":this.public,
      "nbrShared":this.nbrShared,
    }
     this.service.ajout(body).subscribe()
  }

}
