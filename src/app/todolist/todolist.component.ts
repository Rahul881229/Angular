import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
}) 
export class TodolistComponent {
task=""
tasklist:{id:number, task:string}[]=[]
addtask(){
  this.tasklist.push({id:this.tasklist.length+1 , task:this.task})
  console.log(this.tasklist)
  this.task=''
}
Deletetask(taskId:number){
  this.tasklist=
  this.tasklist.filter((item)=>item.id!=taskId);
 }
}
