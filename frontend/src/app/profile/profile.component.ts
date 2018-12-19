import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  url: string
  avatar: File

  constructor(
      private pServ: ProfileService,
      private http: HttpClient,
      private router: Router
    ) { 
      //this.url = "http://127.0.0.1:3000/";
      this.url = "https://youyiwei-web-ic18.herokuapp.com/"
    }

  ngOnInit() {
    document.getElementById("emailValidity").style.visibility = "hidden";
    document.getElementById("emailValidity").innerHTML = "Email address is invalid";

    document.getElementById("phonumValidity").style.visibility = "hidden";
    document.getElementById("phonumValidity").innerHTML = "Phone number is invalid";

    document.getElementById("zipcodeValidity").style.visibility = "hidden";
    document.getElementById("zipcodeValidity").innerHTML = "Zipcode is invalid";

    document.getElementById("passwValidity").style.visibility = "hidden";
    document.getElementById("passwValidity").innerHTML = "Password not match";


    this.pServ.getProfile();

  }

  uploadAvatar(event) {
      if (event.target.files && event.target.files[0]) {
          this.avatar = <File>event.target.files[0]
          var data = new FormData();
          data.append('image', this.avatar, this.avatar.name)
          this.pServ.uploadAvatar(data).subscribe(res => {
              if (res['img']) {
                  this.pServ.updateAvatar(res['img']).subscribe(re => {
                      this.pServ.getProfile()
                  })
              }
          })
      }
  }


  onClick() {
      //display name
      var disname = document.getElementById("disname");

      //email validation
      var email = document.getElementById("email");
      var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])*/;
      var emailIsValid = 1;
      if (!emailReg.test((<HTMLInputElement>email).value) && (<HTMLInputElement>email).value != "") {
          document.getElementById("emailValidity").style.visibility = "visible";
          emailIsValid = 0;
      }
      else
          document.getElementById("emailValidity").style.visibility = "hidden";

      //phone number validation
      var phonum = document.getElementById("phonum");
      var phonumReg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
      var phonumIsValid = 1;
      if (!phonumReg.test((<HTMLInputElement>phonum).value) && (<HTMLInputElement>phonum).value != "") {
          document.getElementById("phonumValidity").style.visibility = "visible";
          phonumIsValid = 0;
      }
      else
          document.getElementById("phonumValidity").style.visibility = "hidden";

      //zipcode validation
      var zipcode = document.getElementById("zipcode");
      var zipcodeReg = /^[0-9]{5}(-[0-9]{4})?$/;
      var zipcodeIsValid = 1;
      if (!zipcodeReg.test((<HTMLInputElement>zipcode).value) && (<HTMLInputElement>zipcode).value != "") {
          document.getElementById("zipcodeValidity").style.visibility = "visible";
          zipcodeIsValid = 0;
      }
      else
          document.getElementById("zipcodeValidity").style.visibility = "hidden";

      //password validation
      var password = document.getElementById("password");
      var passwordConfir = document.getElementById("passwordConfir");
      var passwordIsValid = 1;
      if((<HTMLInputElement>password).value != (<HTMLInputElement>passwordConfir).value) {
          document.getElementById("passwValidity").style.visibility = "visible";
          passwordIsValid = 0;
      }
      else
          document.getElementById("passwValidity").style.visibility = "hidden";


      var updated = [];
      if (emailIsValid && phonumIsValid && zipcodeIsValid && passwordIsValid) {
          if (disname && (<HTMLInputElement>disname).value != "") {
              updated.push("display name updated from \"" + document.getElementById("nameValue").innerHTML + "\" to \"" + (<HTMLInputElement>document.getElementById("disname")).value + "\"");
              document.getElementById("nameValue").innerHTML = (<HTMLInputElement>document.getElementById("disname")).value;
              (<HTMLInputElement>document.getElementById("disname")).value = "";
          }
          if (email && (<HTMLInputElement>email).value != "") {
              updated.push("email address updated from \"" + document.getElementById("emailValue").innerHTML + "\" to \"" + (<HTMLInputElement>document.getElementById("email")).value + "\"");
              var newEmail = (<HTMLInputElement>document.getElementById("email")).value;
              document.getElementById("emailValue").innerHTML = newEmail;
              (<HTMLInputElement>document.getElementById("email")).value = "";

              this.http.put(this.url + 'email', { email: newEmail }, { withCredentials: true }).subscribe( res => {
                //console.log(res["email"])
              })
          }
          if (phonum && (<HTMLInputElement>phonum).value != "") {
              updated.push("phone name updated from \"" + document.getElementById("phonumValue").innerHTML + "\" to \"" + (<HTMLInputElement>document.getElementById("phonum")).value + "\"");
              document.getElementById("phonumValue").innerHTML = (<HTMLInputElement>document.getElementById("phonum")).value;
              (<HTMLInputElement>document.getElementById("phonum")).value = "";
          }
          if (zipcode && (<HTMLInputElement>zipcode).value != "") {
              updated.push("zipcode updated from \"" + document.getElementById("zipcodeValue").innerHTML + "\" to \"" + (<HTMLInputElement>document.getElementById("zipcode")).value + "\"");
              var newZipcode = (<HTMLInputElement>document.getElementById("zipcode")).value;
              document.getElementById("zipcodeValue").innerHTML = newZipcode;
              (<HTMLInputElement>document.getElementById("zipcode")).value = "";

              this.http.put(this.url + 'zipcode', { zipcode: newZipcode }, { withCredentials: true }).subscribe( res => {
                //console.log(res["zipcode"])
              })
          }
          if (password && (<HTMLInputElement>password).value != "") {
              updated.push("password updated from \"" + document.getElementById("passwordValue").innerHTML + "\" to \"" + (<HTMLInputElement>document.getElementById("password")).value + "\"");
              var newPassword = (<HTMLInputElement>document.getElementById("password")).value;
              document.getElementById("passwordValue").innerHTML = newPassword;
              (<HTMLInputElement>document.getElementById("password")).value = "";

              this.http.put(this.url + 'password', { password: newPassword }, { withCredentials: true }).subscribe( res => {
                  //console.log(res["result"])
              })
          }
          if (passwordConfir && (<HTMLInputElement>passwordConfir).value != "") {
              document.getElementById("passwordConfirValue").innerHTML = (<HTMLInputElement>document.getElementById("passwordConfir")).value;
              (<HTMLInputElement>document.getElementById("passwordConfir")).value = "";
          }
      }

      var massage = "";
      if (updated.length)
          for (var i = 0; i < updated.length; i++)
              massage = massage + updated[i] + "<br>";
      
      document.getElementById("massage").innerHTML = massage;

  }

  link() {
    const username = (<HTMLInputElement>document.getElementById('normalUsername')).value;
    const password = (<HTMLInputElement>document.getElementById('normalPassword')).value;
    this.http.put(this.url + 'link', {username: username, password: password}, {withCredentials: true})
        .subscribe(res => {
          if (res['result'] === 'success') {
              this.router.navigate(['auth']);
          } else {
            //console.log(res);
          }
        });
  }

  unlink() {
    this.http.get(this.url + 'unlink', {withCredentials: true}).subscribe();
  }
}