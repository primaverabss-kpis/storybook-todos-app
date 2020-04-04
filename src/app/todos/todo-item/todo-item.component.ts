import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input() todo: Todo;

  @Output()
  toggleComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  onToggleComplete(checked): void {
    this.todo = {...this.todo, completed: checked};
    this.toggleComplete.emit(this.todo.completed);
  }

  onDelete(): void {
    this.delete.emit(this.todo);
  }
}
