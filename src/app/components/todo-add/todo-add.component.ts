import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  formGroup: FormGroup;

  @Output() valueChange = new EventEmitter();
  displayAddTodo: boolean;

  @Input() todo = { name: '', desc: '', status: '' };

  constructor(private formBuilder: FormBuilder, private router: Router, private todoService: TodoService,
    private notifier: NotifierService) { }

  ngOnInit() {
    this.displayAddTodo = true;
    this.initializeTodoForm();
  }

  addTodo() {
    if (this.formGroup.valid) {
      let todo = this.formGroup.value;
      console.log("Todo data " + todo);
      this.todoService.createTodo(todo).subscribe((data: {}) => {
        //this.router.navigate(['/todo-list']);
        this.notifier.notify("success","Todo added successfully");
      })
    }
  }

  initializeTodoForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  goBack(): void {
    this.displayAddTodo = false;
    console.log("Back clicked= " + this.displayAddTodo);
    this.valueChange.emit(this.displayAddTodo);
  }

}
