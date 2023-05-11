import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor() {
   // videoUrl:String=' http://localhost:3000'
   }
   get():Observable<any>{
    return this.httpClient.get(' http://localhost:3000');
  }
  ajout(video:any){
    return this.httpClient.post('http://localhost:3000');
  }
}
