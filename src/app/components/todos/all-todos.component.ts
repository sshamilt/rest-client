import { Component, OnInit } from '@angular/core';

import { Todo } from '../../types';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {
  todos: Todo[];

  constructor(private svc: RestService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.svc.getAllTodos()
        .then(todos => this.todos = todos)
  }

}