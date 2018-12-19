import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputName: string;
  inputPwd: string;
  nameValidity: string;
  pwdValidity: string;
  loginMes: string

  url: string;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    this.nameValidity = "";
    this.pwdValidity = "";

    //this.url = "http://127.0.0.1:3000/";
    this.url = "https://youyiwei-web-ic18.herokuapp.com/"
  }

  ngOnInit() {
    
  }

  onClick() {
    if (!this.inputName) {
      this.nameValidity = "Please enter the account name";
    }
    else {
      this.nameValidity = "";
    }

    if (!this.inputPwd) {
      this.pwdValidity = "Please enter the password";
    }
    else {
      this.pwdValidity = "";
    }

    if (this.inputName && this.inputPwd) {
      
        //post to server
        var data = {
          "username": (<HTMLInputElement>document.getElementById("accountName-login")).value,
          "password": (<HTMLInputElement>document.getElementById("password-login")).value
        }
        
        this.http.post(this.url + 'login', data, { withCredentials: true }).subscribe( res => {
          //console.log(res)
          if (res["result"] == "success") {

            //navigate to main page
            this.router.navigate(['main']);
            
          }

        })
        
    }
  }

  loginWithFb() {
    document.location.href = this.url + 'facebook/login'
  }

}
