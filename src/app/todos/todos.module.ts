import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TodoInputComponent, TodoItemComponent, TodoListComponent } from './components';
import { TodosPageComponent } from './containers';
import { todosRoutes } from './todos.routes';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoInputComponent,
    TodosPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(todosRoutes)
  ],
  exports: [TodosPageComponent]
})
export class TodosModule { }
