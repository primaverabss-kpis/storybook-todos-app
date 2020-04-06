import { TitleComponent } from './title.component';

export default {
  title: 'UI Kit/Title',
  component: TitleComponent
};

export const Standard = () => ({
  component: TitleComponent,
  props: {
    value: 'Todos'
  }
});
