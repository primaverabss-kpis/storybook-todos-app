import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ButtonComponent,
    CheckboxComponent,
    TitleComponent,

  ]
})
export class SharedModule { }
