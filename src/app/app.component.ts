import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { TwowayComponent } from "./twoway/twoway.component";
import { IfelseComponent } from './ifelse/ifelse.component';
import { ElseifComponent } from './elseif/elseif.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SignalsComponent } from './signals/signals.component';
import { ComputedsignalComponent } from './computedsignal/computedsignal.component';
import { FormsModule } from '@angular/forms';
import { ContectualvarComponent } from './contectualvar/contectualvar.component';
import {  MultiselectOverviewExample } from './t-button/button.component';
import { dropdown } from './t-dropdown/t-dropdown.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DynamicstyleComponent } from './dynamicstyle/dynamicstyle.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [MultiselectOverviewExample,SignalsComponent,dropdown,TodolistComponent,DynamicstyleComponent,DirectivesComponent],//IMPORTING THE NEW COMPONENETS WE  CREATED 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
//    title = 'code step by step';
// //    name="Rahul kumar"
// //      hello() {
// //       let x = 20;
// //       console.log("This is from the function", x);
    
// //       const h2 = document.createElement('h2');
      
// //       h2.innerHTML = `Count = ${x + x}`;
    
// //       document.body.appendChild(h2);
    
// //     }
// // clicked(){
// //   alert("i am clicked")
// //    console.log("hii iam here ")
// //   this.hello()
// // }
// // TYPE SCRIPT 
//  name:string="rahul kumar"
// data:string|number ="HELLO"// in this we can define multiple  type of dta i saem varibale 
// other:any=true;// this can accept anytype of datatype variabel inside it 

//  updated(){
//    this.name="123456";
// this.data="yadav"
// this.data=2345;
//      this.other="it can accept anything "
//      this.other=8873731229;
//      this.other=true;
//      this.other=Object;
//   }
//    updatedv(){
//     let x:number=20;
//     console.log(x)
// this.sum(23,44);
//    }
//     sum(a:number ,b:number){
//      console.log(a+b)
//      console.log(a*b)
//      console.log(a/b)
//     //  this.updatedv();
//     }
//     handleEvent(event:Event){
//            console.log("funcition called",event.type)
//            console.log("funcition value",(event.target as HTMLInputElement).value);

//     }

      //  get and set value  form input box 
      name=""
       displayName="";

      getName(event:Event){
        this.name=(event.target as HTMLInputElement).value
      }
          showName(){
            this.displayName=this.name;
          }
           setName(){
            this.name="sam"
           }
           job:string="software developer ";
} 
