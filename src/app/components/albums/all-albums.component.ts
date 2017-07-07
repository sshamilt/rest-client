import { Component, OnInit } from '@angular/core';

import { Album } from '../../types/album';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {
  albums: Album[];

  constructor(private svc: RestService) { }

  ngOnInit(): void {
    this.getAllAlbums();
  }

  getAllAlbums(): void {
    this.svc.getAllAlbums()
        .then(albums => this.albums = albums)
  }

}