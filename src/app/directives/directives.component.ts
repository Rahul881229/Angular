import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
show =true
 login="false;"
 Students=["rahul", "anil","ankit", "ankush","mohan"]
 StudentsData=[
  {name:"rahul",
  age:23,job:"developer"},
  {name:"rahul",age:23,job:"developer"},
  {name:"ram",age:13,job:"developer"},
  {name:"rakesh",age:29,job:"developer"},
  {name:"shyam",age:34,job:"developer"},
  {name:"raghu",age:23,job:"developer"},]
  StudentsDatas = [
    {
      name: 'Alice',
      age: 22,
      job: 'Engineer',
      skills: ['Angular', 'TypeScript', 'HTML']
    },
    {
      name: 'Bob',
      age: 24,
      job: 'Designer',
      skills: ['Figma', 'Photoshop']
    }
  ];
  


  //multiple blocks
  Block=0;
  updateBlock(){
    this.Block++;
    if( this.Block>3){
 this.Block=0;
    }
  }
}
