import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  name: string;
  avatar: string;
  emailValue: string;
  phonumValue: string;
  zipcodeValue: string;
  passwordValue: string;
  dateOfBirth: string;

  url: string;

  constructor(
    private http: HttpClient
  ) { 
    //this.url = "http://127.0.0.1:3000/";
    this.url = "https://youyiwei-web-ic18.herokuapp.com/"
  }

  getEmail() {
    this.http.get(this.url + 'email/', { withCredentials: true }).subscribe( res => {
      this.emailValue = res["email"]
      //console.log(this.emailValue)
    })
  }

  getAvatar() {
    this.http.get(this.url + 'avatars/', { withCredentials: true }).subscribe( res => {
      this.avatar = res["avatars"][0]["avatar"]
      //console.log(this.avatar)
    })
  }

  getZipcodeValue() {
    this.http.get(this.url + 'zipcode/', { withCredentials: true }).subscribe( res => {
      this.zipcodeValue = res["zipcode"]
      //console.log(this.zipcodeValue)
    })
  }
  
  getDateOfBirth() {
    this.http.get(this.url + 'dob/', { withCredentials: true }).subscribe( res => {
      this.dateOfBirth = res["dob"]
      //console.log(this.dateOfBirth)
    })
  }

  getProfile() {
    this.getEmail()
    this.getAvatar()
    this.getZipcodeValue()
    this.getDateOfBirth()
  }

  uploadAvatar(data: FormData) {
    return this.http.put(this.url + 'uploadAvatar/', data, { withCredentials: true })
  }

  updateAvatar(avatar: string) {
    return this.http.put(this.url + 'avatar/', { avatar: avatar }, { withCredentials: true })
  }
}
