import { Component } from 'angular2/core';
import { Task } from './task.model';

//////////////     task-display < task-list < root      /////////////////////
@Component({
  selector: 'task-display',
  inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})

export class TaskComponent {
  public task: Task;
}
