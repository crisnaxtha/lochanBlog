import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Post } from '../../../models/post.model';
import { POST } from '../../../mocks/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = POST;


  constructor() { }

  ngOnInit() {
    console.log(this.posts)

  }

}
