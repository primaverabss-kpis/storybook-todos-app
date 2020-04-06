import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import {Guid} from 'guid-typescript';

export default {
  title: 'Todos/Todo List',
  component: TodoListComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      declarations: [TodoItemComponent]
    })
  ]
};

const props = {
  todoRemoved: action('todoRemoved'),
  todoChanged: action('todoChanged')
};

export const List = () => ({
  component: TodoListComponent,
  props: {
    ...props,
    todos: [
      { id: Guid.raw(), title: 'Task 1', completed: false },
      { id: Guid.raw(), title: 'Task 2', completed: true },
      { id: Guid.raw(), title: 'Task 3', completed: false },
      { id: Guid.raw(), title: 'Task 4', completed: false }
    ]
  }
});


export const Empty = () => ({
  component: TodoListComponent,
  props: {
    ...props,
    todos: []
  }
});
