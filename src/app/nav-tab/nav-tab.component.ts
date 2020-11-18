import { Component, OnInit, EventEmitter, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {
 inputData ='';
 @Output() listCreated =new EventEmitter<{listName:string}>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log(propName,"on changes ");


    }
  }
  ngOnInit(): void {
  }
  inputDataFunc(){
    this.listCreated.emit({
      listName:this.inputData
    })
    // console.log(this.inputData);


  }




}
