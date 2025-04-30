import { Component, computed, CSP_NONCE, signal } from '@angular/core';

@Component({
  selector: 'app-computedsignal',
  imports: [],
  templateUrl: './computedsignal.component.html',
  styleUrl: './computedsignal.component.css'
})
export class ComputedsignalComponent {
// x=20;
// y=30;
//    z= this.x+this.y;
// sum(){
//   console.log(this.z)
//   this.x=100;
//   console.log(this.z)
//    this.z=this.x+this.y
//      console.log(this.z)
// }
 x=signal(20)
 y=signal(30)
 z=computed(()=>{ return this.x()+this.y()

 })
  sum(){
  
    console.log(this.z())
     this.x.set(100);
      console.log(this.z())
  }
}
