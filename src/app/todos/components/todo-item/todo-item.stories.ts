import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoItemComponent } from './todo-item.component';


export default {
  title: 'Todos/Todo Item',
  component: TodoItemComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ]
};

const props = {
  todoRemoved: action('todoRemoved'),
  todoChanged: action('todoChanged')
};

export const Active = () => ({
  component: TodoItemComponent,
  props: {
    ...props,
    todo: {
      title: 'Task 1',
      completed: false
    }
  }
});


export const Completed = () => ({
  component: TodoItemComponent,
  props: {
    ...props,
    todo: {
      title: 'Task 1',
      completed: true
    }
  }
});
