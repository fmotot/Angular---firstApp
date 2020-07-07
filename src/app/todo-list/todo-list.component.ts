import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass', './todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Ma Todo List';
  newTodo = '';
  todos: string[] = [];
  quand = new Date();

  constructor() { }

  createTodo(){
    if (this.newTodo){
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }


  ngOnInit(): void {
  }

}
