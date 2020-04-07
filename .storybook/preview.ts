import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/angular';

addDecorator(withKnobs);

addParameters({
  options: {
    showRoots: true
  },
  backgrounds: [
    { name: 'blue', value: '#3b5998', default: true },
    { name: 'green', value: '#42cea2' },
  ]
});

