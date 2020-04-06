import { TitleComponent } from './title.component';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'UI Kit/Title',
  component: TitleComponent
};

export const Standard = () => ({
  component: TitleComponent,
  props: {
    value: text('Title', 'todos')
  }
});
