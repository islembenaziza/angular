import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVideoComponent } from './get-video.component';

describe('GetVideoComponent', () => {
  let component: GetVideoComponent;
  let fixture: ComponentFixture<GetVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetVideoComponent]
    });
    fixture = TestBed.createComponent(GetVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
