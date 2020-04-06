import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Guid } from 'guid-typescript';
import { UiKitModule } from '../../../ui-kit/ui-kit.module';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';


export default {
  title: 'Todos/Todo List',
  component: TodoListComponent,
  decorators: [
    moduleMetadata({
      imports: [UiKitModule],
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
