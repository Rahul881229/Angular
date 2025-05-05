import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  imports: [NgSwitch, NgSwitchCase,NgSwitchDefault],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
 color="green"
 onclickchenge(color:string){
this.color=color;
 }
}
