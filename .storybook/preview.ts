import { withKnobs } from '@storybook/addon-knobs';
import { withA11Y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/angular';

addDecorator(withKnobs);

addDecorator(withA11Y);

addParameters({
  options: {
    showRoots: true,
    panelPosition: 'right',
    // storySort
    selectedPanel: 'storybook/knobs/panel'
  },
  themes: [
    { name: 'Endless River', class: 'theme-endless-river', color: '#42cea2', default: true},
    { name: 'Steel Gray', class: 'theme-steel-gray', color: '#928DAB' },
  ],
});

