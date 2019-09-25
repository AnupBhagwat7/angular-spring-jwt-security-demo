import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { Todo } from 'src/app/domain/Todo';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  cols: any[];
  todos: Todo[];
  displayedColumns: string[] = ['Task Name', 'Task Description', 'Status', 'action'];

  displayTodoList = true;
  displayTodoAdd = false;
  displayTodoEdit = false;

  constructor(private todoService: TodoService, private router: Router, private notifier: NotifierService) {
  }

  ngOnInit() {
    this.displayTodoList = true;
    this.displayTodoAdd = false;
    this.displayTodoEdit = false;

    console.log("From Init = " + this.displayTodoList + "  " + this.displayTodoAdd);
    this.getTodoList().subscribe((data) => { this.todos = data });

    this.cols = [
      { field: 'name', header: 'Task Name' },
      { field: 'desc', header: 'Task Description' },
      { field: 'status', header: 'Status' },
      { field: 'action', header: 'Action' }
    ];

    this.statusValues = [
      { label: 'Done', value: 'Done' },
      { label: 'Pending', value: 'Pending' },
      { label: 'Cancelled', value: 'Cancelled' }
    ];
  }

  // To Get List Of Todos
  getTodoList() {
    return this.todoService.getTodoList();
  }

  // To Get Todo
  getTodo(todoId) {
    return this.todoService.getTodo(todoId);
  }

  // To Edit Todo
  editTodo(todoId) {
    this.displayTodoList = false;
    this.displayTodoEdit = true;
    this.router.navigate([`/todo-edit/${todoId}`]);
  }

  //Delete Todo
  deleteTodo(todoId) {
    console.log("Delete id : " + todoId);
    this.todoService.deleteTodo(todoId).subscribe((data) => {
      console.log("success");
      this.notifier.notify("success", "Task deleted successfully!!");
    });
    this.ngOnInit();
    this.router.navigate([`/`]);
  }

  //add Todo
  addTodo() {
    console.log("Before = " + this.displayTodoList + "  " + this.displayTodoAdd);
    this.displayTodoList = false;
    this.displayTodoAdd = true;
    console.log("After =" + this.displayTodoList + "  " + this.displayTodoAdd);
  }

  hideTodoAdd(event) {
    console.log("Event emiited " + event);
    this.displayTodoList = true;
    this.displayTodoAdd = event;
  }

  clonedTodos: { [s: string]: Todo; } = {};
  statusValues: SelectItem[];

  onRowEditInit(todo: Todo) {
    this.clonedTodos[todo.id] = { ...todo };
  }

  onRowEditSave(todo: Todo) {
    this.todoService.updateTodo(todo.id, todo).subscribe((data) => {
      console.log("success");
      this.notifier.notify("success", "Task updated successfully!!");
    });
  }

  onRowEditCancel(todo: Todo, index: number) {
    this.todos[index] = this.clonedTodos[todo.id];
    delete this.clonedTodos[todo.id];
  }
}
