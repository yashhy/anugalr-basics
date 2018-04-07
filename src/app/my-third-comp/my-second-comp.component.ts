import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-third-comp',
  templateUrl: './my-third-comp.component.html'
})
export class MyThirdCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // changeMyColor() {
  //   const elem = document.getElementsByClassName('myInput2')[0];
  //   elem.style.backgroundColor = 'green';
  // }

}
