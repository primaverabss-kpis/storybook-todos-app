import { moduleMetadata } from '@storybook/angular';
import { TodoInputComponent } from './todo-input.component';
import { action } from '@storybook/addon-actions';
import { UiKitModule } from '../../../ui-kit/ui-kit.module';

export default {
  title: 'Todos/Todo Input',
  component: TodoInputComponent,
  decorators: [
    moduleMetadata({
      imports: [UiKitModule]
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
