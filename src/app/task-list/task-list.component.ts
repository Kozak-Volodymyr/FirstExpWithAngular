import { Component } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
	constructor(private route:ActivatedRoute){}
	ngOnInit(){
var date:Date=new Date(this.route.snapshot.params['date'])
console.log(date)
	}
  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Call dad'),
    new Task('Go to the gym'),
    new Task('Wash the dishes'),
    new Task('Shop for the party'),
  ];
  add(newTask: string): void {
    this.tasks = [new Task(newTask), ...this.tasks];
  }
  remove(deleteTask: Task) {
    var userConfirmed = confirm(
      `Do you want remove task? \n ${deleteTask.title}`
    );
    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != deleteTask);
    }
  }
}
class Task {
  constructor(public title: string) {}
  toggleIsDone() {
    this.isDone = !this.isDone;
  }
  public isDone = false;
}

