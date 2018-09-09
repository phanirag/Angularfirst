import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  //selector: '.app-test',
  selector: '[app-test]',
  template: `<h2> This is from Test Component and name is {{name}} </h2>
  <h2>{{2+2}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{conca()}}</h2>
  <h2>{{siteurl}}</h2>`,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "PhaniRaghava"
  public siteurl= window.location.href;
  constructor() { }

  ngOnInit() {
  }

  conca(){
    return "hello" + this.name;
  }
}
