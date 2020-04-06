import { moduleMetadata } from '@storybook/angular';
import { TodoInputComponent } from './todo-input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Todos/Todo Input',
  component: TodoInputComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ]
};

const props = {
  add: action('add')
};

export const Empty = () => ({
  component: TodoInputComponent,
  props: {
    ...props
  }
});

export const With_Value = () => ({
  component: TodoInputComponent,
  props: {
    ...props,
    value: 'Task 1'
  }
});
