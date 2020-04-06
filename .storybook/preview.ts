import { addDecorator, addParameters, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

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
