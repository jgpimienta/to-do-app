import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  tasks: string[] = [];
  newTask: string = ''; 
 

  eliminarTask(taskIndex: number) {
    this.tasks.splice(taskIndex, 1);
  }
  addTask(){
   
      this.tasks.push(this.newTask);
      this.newTask = '';
      alert("se agrego nueva tarea")
    
  }
 
 
}
