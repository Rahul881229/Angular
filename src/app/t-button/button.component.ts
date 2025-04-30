// import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// @Component({
//   selector: 'app-button',
//   imports: [],
//   templateUrl: './button.component.html',
//   styleUrl: './button.component.css',
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class ButtonComponent {
//   multidropdown(event:KeyboardEvent){
//       console.log(`${event.key}`)
//   }
// }

            
              import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
              
              /**
              * @title Multi select
              */
              @Component({
              selector: 'multiselect-overview-example',
              // styleUrls: ['multiselect-overview-example.css'],
              templateUrl: 'button.component.html',
                schemas: [CUSTOM_ELEMENTS_SCHEMA],

              })
              export class MultiselectOverviewExample {
              
              @ViewChild("alert", { static: false }) alert!: ElementRef;
              
              data: any = JSON.stringify([{"id":1,"label":"Apple"},{"id":2,"label":"Strawberry"},{"id":3,"label":"Pineapple"},{"id":4,"label":"Cherry"},{"id":5,"label":"Papaya"}]);
              
              // multidropdown callback details
              multidropdown(event:any) {
              // this.alert.nativeElement.show('tmultidropdown+<br>'Check in the console for the event details', 'TIDE', 8000, 'success');
              console.log('tmultidropdown event Details:::::::::::::::::::::::::::::', event)
              console.log('tmultidropdown event.detail.data Details:::::::::::::::::::', event.detail.data)   
              }
              
              multidropdownsearch(event:any) {
              // this.alert.nativeElement.show('search+<br>'Check in the console for the event details', 'TIDE', 8000, 'success');
              console.log('search event Details:::::::::::::::::::::::::::::', event)
              console.log('search event.detail.data Details:::::::::::::::::::', event.detail.data)   
              }
              
              
              unselectedItems(event:any) {
              // this.alert.nativeElement.show('unselectedItems+<br>'Check in the console for the event details', 'TIDE', 8000, 'success');
              console.log('unselectedItems event Details:::::::::::::::::::::::::::::', event)
              console.log('unselectedItems event.detail.data Details:::::::::::::::::::', event.detail.data)   
              }
              }
              
          