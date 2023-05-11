import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { AjoutComponent } from './ajout/ajout.component';
import { GetVideoComponent } from './get-video/get-video.component';
import { UpdateVideoComponent } from './update-video/update-video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AjoutComponent,
    GetVideoComponent,
    UpdateVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
