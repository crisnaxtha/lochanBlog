import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configServerUrl } from '../app.config';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts() {
    //debugger;
    console.log("the url is", configServerUrl.serverUrl.concat('posts') );
    return this.http.get( configServerUrl.serverUrl.concat('posts') );
  }

  getPostById(id:number) {
     //debugger;
     console.log("the url is", configServerUrl.serverUrl.concat('posts'), id );
     return this.http.get( configServerUrl.serverUrl.concat('posts'), id );
  }

  public firstPage: string = "";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";
}
