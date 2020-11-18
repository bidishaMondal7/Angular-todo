import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { mylist } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


// mylists : mylist[] = [
//     new mylist('test todo list'),
//     new mylist('my test todo 2')
//   ];
@Input() mylists : {name:string};
@Output()listSelected = new EventEmitter<Object>();
  constructor() { }

  ngOnInit(): void {
  }
  showDetails(){
    // console.log(this.listSelected,'app-list test');
    this.listSelected.emit(this.mylists);
  }


}
