import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[] = [];

  @Output() todoRemoved: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output() todoChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onTodoRemoved(todo: Todo): void {
    this.todoRemoved.emit(todo);
  }

  onTodoChanged(todo: Todo): void {
    this.todoChanged.emit(todo);
  }
}
