import { Component, OnInit } from '@angular/core';
import { Test } from './test';
import { TEST } from './test-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  testList = TEST;

  selectedTest: Test;

  constructor() { }

  ngOnInit() {
  }

  onSelect(test: Test): void {
    this.selectedTest = test;
  }

}