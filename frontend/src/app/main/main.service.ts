

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  user_avatar: string;
  user_name: string;
  user_status: string;
  followings;

  profiles;
  filterProfiles;

  stgName: string;
  
  url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.followings = []
    //this.url = "http://127.0.0.1:3000/";
    this.url = "https://youyiwei-web-ic18.herokuapp.com/"
  }

  getFollowing() {
    this.followings = []

    this.http.get(this.url + 'following/', { withCredentials: true }).subscribe( res => {
      var followingName = res["following"]
      followingName.forEach((name) => {
        this.http.get(this.url + 'avatars/' + name, { withCredentials: true }).subscribe( res => {
          var following = {}

          //name
          following["name"] = name
        
          //avatar
          following["avatar"] = res["avatars"][0]["avatar"]

          //status
          this.http.get(this.url + 'headlines/' + name, { withCredentials: true }).subscribe( res => {
            following["status"] = res["headlines"][0]["headline"]

            this.followings.push(following)
          })
        })
      })
    })
  }

  //get avatar and name
  getAvatar() {
    this.http.get(this.url + 'avatars/', { withCredentials: true }).subscribe( res => {
      this.user_avatar = res["avatars"][0]["avatar"]
      this.user_name = res["avatars"][0]["username"]
      //console.log(this.user_avatar)
    })
  }

  getHeadlines() {
    this.http.get(this.url + 'headlines/', { withCredentials: true }).subscribe( res => {
      this.user_status = res["headlines"][0]["headline"]
      //console.log(this.user_status)
    })
  }

  getUser() {
    this.getHeadlines()
    this.getAvatar()
  }
}
