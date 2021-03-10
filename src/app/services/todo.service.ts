import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }
}