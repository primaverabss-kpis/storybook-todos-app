import { addDecorator, moduleMetadata } from '@storybook/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

addDecorator(moduleMetadata({
  imports: [FlexLayoutModule]
}));
