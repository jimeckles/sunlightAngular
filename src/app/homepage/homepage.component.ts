import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  values = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

}
