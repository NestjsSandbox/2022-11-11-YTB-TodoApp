import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList: Todo[] = [];
  inputTodo: string = '';
  constructor() { }

  ngOnInit(): void {
    this.todoList = [
      {
        content: 'My first todo',
        completed: false,
      },
      {
        content: 'My 2nd todo',
        completed: true,
      },
      {
        content: 'My 3rd todo',
        completed: false,
      },
      {
        content: 'My 4th todo',
        completed: true,
      },
    ];
  }

  toggleDone(id: number){
    this.todoList.map( (value,counter) => {
      if (counter === id) { value.completed = !value.completed}
      return value;
    });
  }

  deleteTodo(id: number){
    //This filters-in (leaves in array) any case that is true.
    //So if case is counter === id then the item will be rejected, not included in the array)
    this.todoList = this.todoList.filter( (value,counter) =>  counter !== id);
  }
  
  addTodo(){
    this.todoList.push(
      {
        content: this.inputTodo,
        completed: false,
      }
    );

    this.inputTodo = '';
  }

}
