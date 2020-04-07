import { withKnobs } from '@storybook/addon-knobs';
import { withA11Y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/angular';

addDecorator(withKnobs);

addDecorator(withA11Y);

addParameters({
  options: {
    showRoots: true
  },
  themes: [
    { name: 'Endless River', class: 'theme-endless-river', color: '#42cea2'},
    { name: 'Steel Gray', class: 'theme-steel-gray', color: '#928DAB' },
  ],
});

