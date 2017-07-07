import { Component, OnInit } from '@angular/core';

import { Post } from '../../types';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];

  constructor(private svc: RestService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.svc.getAllPosts()
        .then(posts => this.posts = posts)
  }

}