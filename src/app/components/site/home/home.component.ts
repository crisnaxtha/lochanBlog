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
  posts : any;
  constructor(private _blogService : BlogService) {
    this.posts = new Post;
  }

  ngOnInit() {
    console.log(this.posts);
    this.showAllPost();
  }

  showAllPost() {
    this._blogService.getAllPost().subscribe(data => {
      console.log('the data is ', data);
      this.posts = data;
    }, error=>{
      console.log('the error is', error);
    })
  }

}
