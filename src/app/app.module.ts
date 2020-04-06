import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FeatureTodosModule } from './feature-todos/feature-todos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FeatureTodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
