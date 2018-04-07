import { Component } from '@angular/core';

@Component({
  selector: '#cit-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  twoWayBinding = 'HELLO ';
  title = 'app';
  canDisplay = false;
  private arr = [1, 2, 3, 4];

  myPipe = 'this is from component';
  numberPipe = 123;
  value1 = 'Hi';
  value2 = 3434;

  variable1 = 123;
  variable2 = 'HELLO';

  newFunction123(param) {
    if (this.twoWayBinding === '123') {
      this.canDisplay = true;
    }
  }

}
