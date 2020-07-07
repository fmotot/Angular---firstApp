import { GreetingPipe } from './greetingPipe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GreetingComponent,
    GreetingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
