import { Component, OnInit } from '@angular/core';
import { Test } from './test';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';
//import { TEST } from './test-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count: number = 0; 

  btntext: string = 'Enter: ';
  inputNum: number =0;
  inputText: string;
  inputText2: string;
  inputText3: string;
  tempNum: number = 0;
  tempCourse: string;
  tempProff: string;
  tempName: string =null;
  list:Test[] = [];
  selectedTest: Test[];
  tempObj: Test;
  
  constructor() { }

  ngOnInit() {
    this.count = this.list.length;
  }

  set() {
    this.tempName = this.inputText;
    this.tempNum = this.inputNum;
    this.tempCourse = this.inputText2;
    this.tempProff = this.inputText3;
    this.addItem();
  }

  addItem() {
    this.tempObj = new Test(this.tempNum, this.tempName, this.tempCourse, this.tempProff);
    this.list.push(this.tempObj);
  }


  onSelect(test: Test): void {
    this.selectedTest = this.list;
  }

}