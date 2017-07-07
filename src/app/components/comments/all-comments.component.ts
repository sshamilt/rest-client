import { Component, OnInit } from '@angular/core';

import { Comment } from '../../types/comment';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private svc: RestService) { }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments(): void {
    this.svc.getAllComments()
        .then(comments => this.comments = comments)
  }

}