import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
 display=true;
 x=10
  togglediv= true;
 hide(){
   console.log("hide")
  this.display=false;
 }
  show(){
    this.display=true;
    console.log('show')
  }
  toggle(){
    this.display=!this.display
  }
  toggeltwo(){
    this.togglediv=!this.togglediv
   }
}
