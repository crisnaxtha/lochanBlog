import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { configServerUrl } from '../app.config';

import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const url = `${configServerUrl.serverUrl}/${'posts'}`;
    console.log(url);
    return this.http.get<Post[]>(url)
    .pipe(

    );
  }

  getPostById(id: number): Observable<Post> {
    const url = `${configServerUrl.serverUrl}/${'posts'}/${id}`;
    console.log(url);
    return this.http.get<Post>(url);
  }

  updatePost(post: Post): Observable<any> {
    const url = `${configServerUrl.serverUrl}/${'posts'}/${post.id}`;
    return this.http.put(url, post, this.httpOptions).pipe(

    );
  }

}
