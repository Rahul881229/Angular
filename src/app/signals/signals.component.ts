import { Component ,  effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
// count = signal(10);
//  x=20;
//   constructor(){
//     effect(()=>{
// console.log(this.count())
//     })
//   }
//    updateValue(){
//   this.count.set(this.count()+1)
//    }
 data=signal<number | string >(10)
 updateSignal(){
   this.data.set('hello')
 }
}
