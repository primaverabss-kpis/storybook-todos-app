import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { TodoInputComponent, TodoItemComponent, TodoListComponent } from './components';
import { TodosPageComponent } from './containers';
import { featureTodosRoutes } from './feature-todos.routes';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoInputComponent,
    TodosPageComponent
  ],
  imports: [
    UiKitModule,
    RouterModule.forChild(featureTodosRoutes)
  ],
  exports: [TodosPageComponent]
})
export class FeatureTodosModule { }
