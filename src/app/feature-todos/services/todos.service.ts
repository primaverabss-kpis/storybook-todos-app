import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject, Observable, of, empty } from 'rxjs';
import { Todo } from '../models/todo.model';

const STORAGE_KEY = 'todos';

@Injectable()
export class TodosService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.initialize();
  }

  getAll(): Observable<Todo[]> {
    const todos = this.storage.get(STORAGE_KEY);
    return of(todos);
  }

  public add(todo: Todo): Observable<Todo> {
    let todos = this.storage.get(STORAGE_KEY);
    todos = [todo, ...todos];
    this.storage.set(STORAGE_KEY, todos);
    return of(todo);
  }

  public update(todo: Todo): Observable<Todo> {
    let todos: Todo[] = this.storage.get(STORAGE_KEY);
    todos = todos.map(t => t.id === todo.id ? todo : t);
    this.storage.set(STORAGE_KEY, todos);
    return of(todo);
  }

  public delete(todo: Todo): Observable<Todo> {
    let todos: Todo[] = this.storage.get(STORAGE_KEY);
    todos = todos.filter(t => t.id !== todo.id);
    this.storage.set(STORAGE_KEY, todos);
    return of(todo);
  }


  private initialize() {
    if (!this.storage.has(STORAGE_KEY)) {
      this.storage.set(STORAGE_KEY, []);
    }
  }

}
