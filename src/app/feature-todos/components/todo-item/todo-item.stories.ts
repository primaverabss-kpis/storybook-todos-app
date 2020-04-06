import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { UiKitModule } from '../../../ui-kit/ui-kit.module';
import { TodoItemComponent } from './todo-item.component';


export default {
  title: 'Todos/Todo Item',
  component: TodoItemComponent,
  decorators: [
    moduleMetadata({
      imports: [UiKitModule]
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
