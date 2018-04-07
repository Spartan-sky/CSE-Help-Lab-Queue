import { Component, OnInit } from '@angular/core';
import { Test } from './test';
import { TEST } from './test-list';
import { TestService } from './test.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //testList = TEST;
  testList: Test[];
  selectedTest: Test;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getTestList();
  }

  onSelect(test: Test): void {
    this.selectedTest = test;
  }

  getTestList(): void {
    this.testList = this.testService.getTestList();
  }
}