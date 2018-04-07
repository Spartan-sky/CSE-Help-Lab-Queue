import { Injectable } from '@angular/core';
import { Test } from './test';
import { TEST } from './test-list';

@Injectable()
export class TestService {

  constructor() { }

  getTestList(): Test[] {
    return TEST;
  }
}
