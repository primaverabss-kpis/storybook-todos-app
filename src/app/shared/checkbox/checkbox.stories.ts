import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxComponent } from './checkbox.component';
import { ButtonComponent } from '../button/button.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Shared/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
      declarations: [ButtonComponent]
    })
  ]
};

const props = {
  change: action('change')
};

export const Unchecked = () => ({
  component: CheckboxComponent,
  props: {
    ...props,
    checked: false
  }
});

export const Checked = () => ({
  component: CheckboxComponent,
  props: {
    ...props,
    checked: true
  }
});
