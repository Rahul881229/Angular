import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway',
  standalone: true,  // <-- ADD THIS
  imports: [FormsModule], // <-- IMPORT FORMSMODULE HERE
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {
  // flag:boolean=true;
  // clearOutput() {
  //   const outputDiv = document.getElementById('output');
  //   if (outputDiv) {
  //     outputDiv.innerHTML = ''; // Clear previous content
  //   }
  // }

  // message() {
  //   if(this.flag==true){

    
  //   this.clearOutput();
  //   let hello: any = "hello";
  //   let welcome: any = "welcome";
  //   const textNode = document.createTextNode(hello + " " + welcome);

  //   const outputDiv = document.getElementById('output');
  //   outputDiv?.appendChild(textNode);

  //   console.log(hello, welcome);
  //   this.flag=false;

  //      }
  
  //        else {
  //         this.clearOutput();
  //         let hello: any = "kshfdgyu";
  //         let welcome: any = "kjfguy";
  //         const textNode = document.createTextNode(hello + " " + welcome);
      
  //         const outputDiv = document.getElementById('output');

  //         outputDiv?.appendChild(textNode);
      
  //         console.log(hello, welcome);
        
  //     this.flag=true;
  //        }
         
  // }
   name=""
    changevalue(event:Event){
      const vla = (event?.target as HTMLInputElement) .value
       this.name=vla;
    }
}
 
