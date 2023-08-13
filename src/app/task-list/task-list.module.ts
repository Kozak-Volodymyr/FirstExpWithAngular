import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { ActivatedRoute,Route } from '@angular/router';


@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
  ],
  exports:[TaskListComponent]
})
export class TaskListModule { }
