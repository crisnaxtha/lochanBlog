import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { configServerUrl } from '../app.config';

import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

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

}
