import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  @Output() todoAdded: EventEmitter<Todo> = new EventEmitter<Todo>();

  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.onTodoAdded(this.value);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.onTodoAdded(this.value);
    }
  }

  private onTodoAdded(title: string) {
    this.todoAdded.emit({
      id: Guid.raw(),
      title,
      completed: false
    });
    this.value = '';
  }

}
