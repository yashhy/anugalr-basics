import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-comp',
  templateUrl: './my-second-comp.component.html',
  styleUrls: ['./my-second-comp.component.css']
})
export class MySecondCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // changeMyColor() {
  //   const elem = document.getElementsByClassName('myInput2')[0];
  //   elem.style.backgroundColor = 'green';
  // }

}
