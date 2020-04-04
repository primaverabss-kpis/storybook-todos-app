import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
