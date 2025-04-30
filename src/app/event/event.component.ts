import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
    gfg(event:any){
      console.log(event.target.value); 
             console.log("dfduf")
    }
}
