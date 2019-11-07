import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../../models/post.model';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private route:ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id)
      .subscribe(post => this.post = post);
  }

}
