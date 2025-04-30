import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.css'
})
export class ElseifComponent {
   color=0;
    green(){
     this.color=1;
    }
    blue(){
this.color=2
    }
    red(){
      this.color=3
    }
    black(){
      this.color=4
    }
     handleinout(event:Event){
      this.color=parseInt((event.target as HTMLInputElement).value)
     }

}
