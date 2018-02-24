import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin : boolean = true;
  // @Input() numbers = 5;

  constructor() { 
  }

  ngOnInit() {
    // console.log("value is ", this.numbers, "Hola");

  }

}
