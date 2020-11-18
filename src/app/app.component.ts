import { Component, ViewEncapsulation, EventEmitter, Output, SimpleChanges } from '@angular/core';
// import { mylist } from './list/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'todo-app';
  myAppList = [];
  clicked : boolean = false;
  // @Output() specificList = new EventEmitter<mylist>();
  listShow : string;
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log(propName,"on changes ");


    }
  }
  onListCreation(event:{listName:string}){
      this.myAppList.push({
      name:event.listName
    });
    console.log(event);
  }

  listDetailsShow(listDetails: string){
   this.listShow = listDetails;
   this.clicked = true;
  console.log(this.listShow);
  }
}
