import { Component, OnInit } from '@angular/core';

import { Photo } from '../../types';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.css']
})
export class AllPhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private svc: RestService) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos(): void {
    this.svc.getAllPhotos()
        .then(photos => this.photos = photos)
  }

}