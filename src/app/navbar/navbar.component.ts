import { Component, OnInit } from '@angular/core';
import { Test } from './test';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  test: Test = {
    id: 1,
    name: 'Bob'
  };

  death = 'ayelmao';

  constructor() { }

  ngOnInit() {
  }

}