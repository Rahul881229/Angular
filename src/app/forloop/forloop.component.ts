import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
   users =["anil", "rahul", "tony","anuj"]
   students =[
    {name:"anil", age :29, email:"anil@gmilcom"},
    {name:"suresh", age :29, email:"anil@gmilcom"},
    {name:"ramesh", age :29, email:"anil@gmilcom"},
    {name:"ramu", age :29, email:"anil@gmilcom"},
    {name:"sahmu", age :29, email:"anil@gmilcom"}
  ]
  getNAme(name:string){
    console.log(name)
  }
}
