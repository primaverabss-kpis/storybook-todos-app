import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() todoRemoved: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output() todoChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  ngOnInit(): void {

  }

  onToggleComplete(checked: boolean): void {
    this.todo = {...this.todo, completed: checked};
    this.todoChanged.emit(this.todo);
  }

  onTodoRemoved(): void {
    this.todoRemoved.emit(this.todo);
  }

  onTitleChanged(title: string): void {
    this.todo = {...this.todo, title};
    this.todoChanged.emit(this.todo);
  }
}
