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

const props = {
  color: 'rgba(0,0,0,.1)',
  hoverColor: '#f44336',
  strokeWidth: '2px',
  icon: 'remove',
  click: action('click')
};

export const Small_Circle = () => ({
  component: ButtonComponent,
  props: { ...props, size: 'small', style: 'circle' }
});

export const Medium_Circle = () => ({
  component: ButtonComponent,
  props: { ...props, size: 'medium', style: 'circle' }
});

export const Large_Circle = () => ({
  component: ButtonComponent,
  props: { ...props, size: 'large', style: 'circle' }
});


export const Small_Square = () => ({
  component: ButtonComponent,
  props: { ...props, size: 'small', style: 'square' }
});

export const Medium_Square = () => ({
  component: ButtonComponent,
  props: { ...props, size: 'medium', style: 'square' }
});

export const Large_Square = () => ({
  component: ButtonComponent,
  props: { ...props, size: 'large', style: 'square' }
});
