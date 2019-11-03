import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Lochan Blog";
  description = "Welcome to the blog of";
  constructor() { }

  ngOnInit() {
  }

}
