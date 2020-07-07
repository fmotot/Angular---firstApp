import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.sass'],
})
export class GreetingComponent implements OnInit {

  name = 'John Doe';
  isMale = true;

  constructor() { }

  ngOnInit(): void {
  }

}
