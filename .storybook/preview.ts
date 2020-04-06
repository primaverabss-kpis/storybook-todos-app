import { addDecorator, addParameters, moduleMetadata } from '@storybook/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

addDecorator(moduleMetadata({
  imports: [FlexLayoutModule]
}));

addParameters({
  options: {
    showRoots: true
  },
  backgrounds: [
    { name: 'blue', value: '#3b5998', default: true },
    { name: 'green', value: '#42cea2' },
  ]
});
