import { Component, OnInit } from '@angular/core';
import { Todo } from './domain/Todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Todo Manager';

/*     displayDialog: boolean;

    user: Todo = {};

    selectedUser: Todo;

    newUser: boolean;

    users: Todo[];

    cols: any[];
 */
    constructor(private userservice: TodoService) { }

    ngOnInit() {
        //this.userservice.getUsersSmall().then(users => this.users = users);

        /* this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'age', header: 'Age' },
            { field: 'mobile', header: 'Mobile' },
            { field: 'salary', header: 'Salary' }
        ]; */
    }
/* 
    showDialogToAdd() {
        this.newUser = true;
        this.user = {};
        this.displayDialog = true;
    }

    save() {
        let users = [...this.users];
        if (this.newUser)
            users.push(this.user);
        else
            users[this.users.indexOf(this.selectedUser)] = this.user;

        this.users = users;
        this.user = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.users.indexOf(this.selectedUser);
        this.users = this.users.filter((val, i) => i != index);
        this.user = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newUser = false;
        this.user = this.cloneUser(event.data);
        this.displayDialog = true;
    }

    cloneUser(c: Todo): Todo {
        let user = {};
        for (let prop in c) {
            user[prop] = c[prop];
        }
        return user;
    }
 */
}
