import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  //selector: '.app-test',
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
