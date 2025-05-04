import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicstyle',
  imports: [],
  templateUrl: './dynamicstyle.component.html',
  styleUrl: './dynamicstyle.component.css'
})
export class DynamicstyleComponent {
bgcolor="red"
 fontSize="40px"
 headingBig="50px"
 headingSmall="20px"
 Zoom=true
  udatesize(){
    this.Zoom=! this.Zoom
  }
}
