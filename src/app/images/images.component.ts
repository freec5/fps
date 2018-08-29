import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../_services/images.service';

import { Images } from '../models/images';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imagesService: ImagesService) { }
  images: {}[];

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imagesService.getImages()
      .subscribe(data => this.images = data);
  }


}
