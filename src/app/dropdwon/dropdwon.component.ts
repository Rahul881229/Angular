import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
              
/**
* @title Basic select
*/
@Component({
selector: 'Dropdown',
styleUrls: ['dropdwon.component.css'],
templateUrl: 'dropdwon.component.html',
schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DropdwonComponent {

@ViewChild("alert", { static: false }) alert!: ElementRef;

 
fruitData: any = [
  { 'value': 1, 'name': 'Apple' },
  { 'value': 2, 'name': 'Strawberry' },
  { 'value': 3, 'name': 'Pineapple' }
];


searchingDetails(event:any) {
// this.alert.nativeElement.show('search+<br>'Check in the console for the event details', 'TIDE', 8000, 'success');
console.log('search event Details:::::::::::::::::::::::::::::', event)
console.log('search event.detail.data Details:::::::::::::::::::', event.detail.data)            
}

tdropdownsearch(event:any) {
// this.alert.nativeElement.show('tdropdown+<br>'Check in the console for the event details', 'TIDE', 8000, 'success');
console.log('tdropdown event Details:::::::::::::::::::::::::::::', event)
console.log('tdropdown event.detail.data.value Details:::::::::::::::::::', event.detail.data.value)            
}

}