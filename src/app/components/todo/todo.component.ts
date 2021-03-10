import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
      this.todoService.getTodos().subscribe(response=>{
        this.todos = response
      })

  }

}
