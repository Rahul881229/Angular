import { Component } from '@angular/core';
 
@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 count:number=0;
  handlecounter(val:string){
    
if(val=="minus"){
  if(this.count>0){
    this.count=this.count-1;
  }
   else {
    alert("the number is lowset itself")

   }
}
    
 else if(val=="plus"){
   this.count=this.count+1;
 }
  else {
    this.count=0;
  }
  }

}
