import { Component, OnInit, Input } from '@angular/core';
import {PostsService} from './posts.service'
import { MainComponent } from '../main.component'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() picsSrc: string;
  @Input() text: string;
  @Input() author: string;
  @Input() time: string;
  @Input() comments;
  @Input() postId: string
  
  showComments;
  ifHideComments: string;

  ifEditPost: boolean;
  ifComment: boolean;
  commentId: string;

  constructor(
    private postServ: PostsService,
    private mainComp: MainComponent
  ) { 
    this.ifEditPost = false
    this.ifComment = false
    this.commentId = null
  }

  ngOnInit() {
    this.showComments = this.comments;
    this.ifHideComments = "Hide Comments";
  }

  hideComments() {
    if (this.ifHideComments == "Hide Comments") {
      this.showComments = null;
      this.ifHideComments = "Show Comments";
    } else {
      this.showComments = this.comments;
      this.ifHideComments = "Hide Comments";
    }
  }

  isComment() {
    this.ifComment = true;
  }

  comment() {
    var inputNewComment = (<HTMLInputElement>document.getElementById('inputNewComment')).value
    this.postServ.setArticles(this.postId, inputNewComment, '-1').subscribe(result => {
      this.mainComp.getPosts()
      this.ifComment = false
    })
  }

  isEditPost() {
    this.ifEditPost = true
  }

  editPost() {
    var inputPost = (<HTMLInputElement>document.getElementById('inputPost')).value
    this.postServ.setArticles(this.postId, inputPost, '').subscribe(result => {
      this.mainComp.getPosts()
      this.ifEditPost =  false
    })
  }

  isEditComment(commentId: string) {
    this.commentId = commentId
  }

  editComment() {
    var inputComment = (<HTMLInputElement>document.getElementById('inputComment')).value
    this.postServ.setArticles(this.postId, inputComment, this.commentId).subscribe(result => {
      this.mainComp.getPosts()
      this.commentId = null
    })
  }

}
