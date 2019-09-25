import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoComponent },
  { path: 'todo-add', component: TodoAddComponent ,canActivate:[AuthGaurdService] },
  { path: 'todo-edit/:id', component: TodoEditComponent },
  { path: '', component: TodoComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
