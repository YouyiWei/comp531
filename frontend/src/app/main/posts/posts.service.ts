import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url: string

  constructor(
    private http: HttpClient
  ) { 
    //this.url = "http://127.0.0.1:3000/";
    this.url = "https://youyiwei-web-ic18.herokuapp.com/"
  }

  setArticles(postId: string, text: string, commentId: string) {
    return this.http.put(this.url + 'articles/' + postId, { text: text, commentId: commentId }, { withCredentials: true })
  }
}
