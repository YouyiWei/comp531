import { Component, OnInit, NgModule } from '@angular/core';
//import { PostsComponent } from './posts/posts.component'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})

@NgModule({
  //declarations: [ PostsComponent ],
})

export class MainComponent implements OnInit {

  inputPost: string;
  inputStatus: string;
  inputFollowing: string;

  inputSearch: string;
  searchKeyword: string;

  articles;
  filterArticles;
  
  addFollowingMes;

  url: string;

  img: File;
  imgUrl: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private mServ: MainService,
    private pServ: ProfileService
  ) { 
    this.addFollowingMes = "";
    //this.url = "http://127.0.0.1:3000/";
    this.url = "https://youyiwei-web-ic18.herokuapp.com/"
  }

  ngOnInit() {
    this.mServ.getFollowing();
    this.getPosts();
    this.mServ.getUser();
  }

  logOut() {    
    this.http.put(this.url + 'logout', {}, { withCredentials: true }).subscribe(res => {
      //console.log(res)
    })
  }

  getPosts() {
    this.http.get(this.url + 'articles/', { withCredentials: true }).subscribe( res => {
      this.articles = res['articles']
      this.filterArticles = res["articles"]
      //console.log(this.filterArticles[1].picture)
    })
  }
  

  clearInput() {
    this.inputPost = null;
  }

  post() {
    this.http.post(this.url + 'article', { image: this.imgUrl, text: this.inputPost }, { withCredentials: true }).subscribe( res => {
      //console.log(res)
      this.clearInput()
      this.getPosts()
    })
  }

  update() {
    if (this.inputStatus) {
      this.mServ.user_status = this.inputStatus;

      var data = { "headline": this.inputStatus }
      this.http.put(this.url + 'headline', data, { withCredentials: true }).subscribe( res => {
        //console.log(res["headline"])
      })

      this.inputStatus = null;
    }
  }

  addFollowing() {
    this.addFollowingMes = "";
    this.http.put(this.url + 'following/' + this.inputFollowing, {}, { withCredentials: true }).subscribe( res => {
      //console.log(res["following"])
      this.getPosts()
      this.mServ.getFollowing()
    })
  }
  
  unfollow(index: number){
    var name = this.mServ.followings[index].name;
    this.http.delete(this.url + 'following/' + name, { withCredentials: true }).subscribe( res => {
      //console.log(res["following"])
      this.getPosts()
      this.mServ.getFollowing()
    })
  }

  filterArticle(value){
      this.searchKeyword = value;
      if(!value) {
        this.filterArticles = Object.assign([], this.articles);
      }
      else {
        this.filterArticles = Object.assign([], this.articles).filter(
          articles => articles.body.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      }
  }

  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.img = <File>event.target.files[0]
      var data = new FormData()
      data.append('image', this.img, this.img.name)
      this.pServ.uploadAvatar(data).subscribe(res => {
        if (res['img'])
          this.imgUrl = res['img']
        else
          this.imgUrl = ''
      })
    }
  }

}