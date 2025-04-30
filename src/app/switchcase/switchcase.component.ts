import { Component } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-switchcase',
  imports: [],
  templateUrl: './switchcase.component.html',
  styleUrl: './switchcase.component.css'
})
export class SwitchcaseComponent {
 color='green'
 handlecolro(val:string){
  this.color=val;

 }
 changecolro(event:Event){
    this.color= (event.target as HTMLInputElement).value
  }
}
