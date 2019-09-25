import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/domain/Todo';
import { TodoService } from './../../services/todo.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  displayTodoEdit :boolean;

  ngOnInit() {
    
  }

  todoid: any;
  todo: Todo;
  formGroup: FormGroup;
  formBuilder: FormBuilder;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {
    activatedRoute.params.subscribe(params => {
      this.todoid = params.id;
    });
    this.displayTodoEdit = true;
    this.initializeTodoForm();
  }

  initializeTodoForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  // To Single Todo Details By ID
  getTodoById(id) {
    this.todoService.getTodo(id).subscribe(res => {
      this.todo = res;
      this.formGroup.patchValue({
        name: this.todo.name,
        desc: this.todo.desc,
        status: this.todo.status
      });
    });
  }

}
