import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Todo } from './../domain/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  endpoint = 'http://localhost:8081/api';

  username = 'myjavablog';
  password = 'password';

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  public deleteTodo(todoId) {

    const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.delete<Todo>("http://localhost:8081/api/todo" + "/" + todoId, { headers });
  }

  public createTodo(todo) {

    const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.post<Todo>("http://localhost:8081/api/todo", todo, { headers });
  }

  // To Get List Of Todos
  getTodoList(): Observable<any> {
    
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Todo[]>('http://localhost:8081/api/todos', { headers });
  }

  // HttpClient API get() method => Fetch Todo
  getTodo(id): Observable<Todo> {

    const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Todo>(this.endpoint + '/todos/' + id, { headers });
  }
  
  // HttpClient API put() method => Update Todo
  updateTodo(id, todo): Observable<Todo> {
    
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.put<Todo>(this.endpoint + '/todo' , JSON.stringify(todo), { headers });
      
  }

}
