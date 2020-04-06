import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI Kit/Buttons',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule]
    })
  ]
};

export const Remove = () => ({
  component: ButtonComponent,
  props: {
    size: 'small',
    style: 'circle',
    color: 'rgba(0,0,0,.1)',
    hoverColor: '#f44336',
    strokeWidth: '2px',
    icon: 'remove',
    click: action('click')
  }
});

export const Add = () => ({
  component: ButtonComponent,
  props: {
    size: 'medium',
    style: 'square',
    color: '#fff',
    bgColor: 'rgb(33, 150, 243)',
    strokeWidth: '0px',
    icon: 'add',
    click: action('click')
  }
});

