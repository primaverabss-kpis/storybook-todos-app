import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
  providers: [TodosService]
})
export class TodosPageComponent implements OnInit {

  todos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onTodoAdded(todo: Todo) {
    this.todosService.add(todo).subscribe(
      newTodo => this.todos = [newTodo, ...this.todos]
    );
  }

  onTodoUpdated(todo: Todo) {
    this.todosService.update(todo).subscribe(
      updatedTodo => this.todos = this.todos.map(t => t.id === updatedTodo.id ? updatedTodo : t)
    );
  }

  onTodoRemoved(todo: Todo) {
    this.todosService.delete(todo).subscribe(
      removedTodo => this.todos = this.todos.filter(t => t.id !== removedTodo.id)
    );
  }
}
