import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  url: string
  nameValidity: string;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    //this.url = "http://127.0.0.1:3000/";
    this.url = "https://youyiwei-web-ic18.herokuapp.com/"

    this.nameValidity = "";
  }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {

      var today = new Date();
      var n = today.getTime();

      (<HTMLInputElement>document.getElementById("timestamp")).value = "" + n;

      //password validation
      var password = document.getElementById("password");
      var passwordConfir = document.getElementById("passwordConfir");
      var passwordIsValid = 1;
      document.getElementById("passwValidity").style.visibility = "hidden";
      document.getElementById("passwValidity").innerHTML = "Password not match";
      if(password && passwordConfir && (<HTMLInputElement>password).value != (<HTMLInputElement>passwordConfir).value) {
          (<HTMLInputElement>document.getElementById("passwValidity")).style.visibility = "visible";
          passwordIsValid = 0;
      }
      else
          document.getElementById("passwValidity").style.visibility = "hidden";

      //birthday validation
      var dateOfBirth = document.getElementById("dateOfBirth");
      var ymd = (<HTMLInputElement>dateOfBirth).value.split("-");
      var year = parseInt(ymd[0]) + 18;
      var month = parseInt(ymd[1], 10); //may begin with '0'
      var day = parseInt(ymd[2], 10);
      
      var myDate=new Date();
      myDate.setFullYear(year, month - 1, day); //month: 0-11
      var dobIsValid = 1;
      document.getElementById("dobValidity").style.visibility = "hidden";
      document.getElementById("dobValidity").innerHTML = "Must older than 18 years old";

      if(myDate.getTime() > today.getTime()) {
          (<HTMLInputElement>document.getElementById("dobValidity")).style.visibility = "visible";
          dobIsValid = 0;
      }
      else
          document.getElementById("dobValidity").style.visibility = "hidden";

          
      if (passwordIsValid && dobIsValid) {

          var data = {
            "username": (<HTMLInputElement>document.getElementById("accountName")).value,
            "emailAddress": (<HTMLInputElement>document.getElementById("emailAddress")).value,
            "dateOfBirth": (<HTMLInputElement>document.getElementById("dateOfBirth")).value,
            "zipcode": (<HTMLInputElement>document.getElementById("zipcode")).value,
            "password": (<HTMLInputElement>document.getElementById("password")).value
          }

          this.http.post(this.url + 'register', data, { withCredentials: true }).subscribe(res => {
            if (res["result"] == "fail") {
                this.nameValidity = "The username has been taken";

            } else {

                this.nameValidity = "";

                var data = {
                    "username": (<HTMLInputElement>document.getElementById("accountName")).value,
                    "password": (<HTMLInputElement>document.getElementById("password")).value
                }

                this.http.post(this.url + 'login', data, { withCredentials: true }).subscribe( res => {
                    if (res["result"] == "success") {
          
                      //navigate to main page
                      this.router.navigate(['main']);
                      
                    }
                })
            }
          });

          
      }

  }

  
}
