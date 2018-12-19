(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hw4';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/registeration/registeration.component */ "./src/app/auth/registeration/registeration.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_following_following_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/following/following.component */ "./src/app/main/following/following.component.ts");
/* harmony import */ var _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/headline/headline.component */ "./src/app/main/headline/headline.component.ts");
/* harmony import */ var _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/posts/posts.component */ "./src/app/main/posts/posts.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }, {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    }, {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
    }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _auth_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_5__["RegisterationComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _main_following_following_component__WEBPACK_IMPORTED_MODULE_7__["FollowingComponent"],
                _main_headline_headline_component__WEBPACK_IMPORTED_MODULE_8__["HeadlineComponent"],
                _main_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    display: table-cell;\n\n    width: 30rem;\n    /* height: 30rem; */\n    background: lightblue;  \n    border-radius: 8px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n    padding: 40px 30px;\n    margin-right:auto;\n    margin-left:auto;\n}"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en-US\">\n    <head>\n        <meta name=\"author\" content=\"Youyi Wei\">\n    </head>\n\n    <body>\n        <router-outlet></router-outlet>\n        <div>\n            <app-registeration class=\"form\"></app-registeration>\n        </div>\n        <div>\n            <app-login class=\"form\"></app-login>\n        </div>\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n\n<form id=\"Login\">\n    <p>Account Name: <input type=\"text\" id=\"accountName-login\" name=\"accountName\" pattern=\"[a-zA-Z]{1}[a-zA-Z0-9]*\" required [(ngModel)]=\"inputName\"><span id=\"nameValidity\">{{ nameValidity }}</span></p>\n    <p>Password: <input type=\"password\" id=\"password-login\" name=\"password\" required [(ngModel)]=\"inputPwd\"><span id=\"pwdValidity\">{{ pwdValidity }}</span></p>\n\n    <button type=\"submit\" id=\"submit-login\" value=\"Submit\" (click)=\"onClick()\">Submit</button>\n    <button type=\"reset\" value=\"Reset\">Clear</button>\n    <button type=\"submit\" id=\"fb-login\" (click)=\"loginWithFb()\">Login with Facebook</button>\n    <p id=\"loginSuc\">{{ loginMes }}</p>\n</form>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.nameValidity = "";
        this.pwdValidity = "";
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClick = function () {
        var _this = this;
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
                "username": document.getElementById("accountName-login").value,
                "password": document.getElementById("password-login").value
            };
            this.http.post(this.url + 'login', data, { withCredentials: true }).subscribe(function (res) {
                //console.log(res)
                if (res["result"] == "success") {
                    //navigate to main page
                    _this.router.navigate(['main']);
                }
            });
        }
    };
    LoginComponent.prototype.loginWithFb = function () {
        document.location.href = this.url + 'facebook/login';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/registeration/registeration.component.css":
/*!****************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/registeration/registeration.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Registration</h1>\n\n<form ngNativeValidate id=\"Registration\" (ngSubmit)=\"onSubmit(regForm)\" #regForm=\"ngForm\">\n    <p>Account Name: <input type=\"text\" id=\"accountName\" name=\"accountName\" placeholder=\"start with a letter\" pattern=\"[a-zA-Z]{1}[a-zA-Z0-9]*\" required><span id=\"nameValidity\">{{ nameValidity }}</span></p>\n    <p>Display Name: <input type=\"text\" id=\"displayName\" name=\"displayName\" placeholder=\"optional\"></p>\n    <p>Email Address: <input type=\"email\" id=\"emailAddress\" name=\"emailAddress\" required></p>\n    <p>Phone Number: <input type=\"tel\" id=\"phoneNumber\" name=\"phoneNumber\" placeholder=\"123-123-1234\" pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" required></p>\n    \n    <p>Date of Birth: <input type=\"date\" id=\"dateOfBirth\" name=\"dateOfBirth\" required><span id=\"dobValidity\"></span></p>\n    \n    \n    <p>Zipcode: <input type=\"text\" id=\"zipcode\" name=\"zipcode\" placeholder=\"12345/12345-6789\" pattern=\"[0-9]{5}(-[0-9]{4})?\" required></p>\n    \n    <p>Password: <input type=\"password\" id=\"password\" name=\"password\" required></p>\n    <p>Password Confirmation: <input type=\"password\" id=\"passwordConfir\" name=\"password confirmation\" required><span id=\"passwValidity\"></span></p>\n    \n\n    <p><input type=\"hidden\" id=\"timestamp\" name=\"timestamp\" value=\"\"></p>\n\n    <button type=\"submit\" id=\"submit\" value=\"Submit\">Submit</button>\n    <button type=\"reset\" value=\"Reset\">Clear</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/registeration/registeration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/registeration/registeration.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function() { return RegisterationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterationComponent = /** @class */ (function () {
    function RegisterationComponent(router, http) {
        this.router = router;
        this.http = http;
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
        this.nameValidity = "";
    }
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    RegisterationComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var today = new Date();
        var n = today.getTime();
        document.getElementById("timestamp").value = "" + n;
        //password validation
        var password = document.getElementById("password");
        var passwordConfir = document.getElementById("passwordConfir");
        var passwordIsValid = 1;
        document.getElementById("passwValidity").style.visibility = "hidden";
        document.getElementById("passwValidity").innerHTML = "Password not match";
        if (password && passwordConfir && password.value != passwordConfir.value) {
            document.getElementById("passwValidity").style.visibility = "visible";
            passwordIsValid = 0;
        }
        else
            document.getElementById("passwValidity").style.visibility = "hidden";
        //birthday validation
        var dateOfBirth = document.getElementById("dateOfBirth");
        var ymd = dateOfBirth.value.split("-");
        var year = parseInt(ymd[0]) + 18;
        var month = parseInt(ymd[1], 10); //may begin with '0'
        var day = parseInt(ymd[2], 10);
        var myDate = new Date();
        myDate.setFullYear(year, month - 1, day); //month: 0-11
        var dobIsValid = 1;
        document.getElementById("dobValidity").style.visibility = "hidden";
        document.getElementById("dobValidity").innerHTML = "Must older than 18 years old";
        if (myDate.getTime() > today.getTime()) {
            document.getElementById("dobValidity").style.visibility = "visible";
            dobIsValid = 0;
        }
        else
            document.getElementById("dobValidity").style.visibility = "hidden";
        if (passwordIsValid && dobIsValid) {
            var data = {
                "username": document.getElementById("accountName").value,
                "emailAddress": document.getElementById("emailAddress").value,
                "dateOfBirth": document.getElementById("dateOfBirth").value,
                "zipcode": document.getElementById("zipcode").value,
                "password": document.getElementById("password").value
            };
            this.http.post(this.url + 'register', data, { withCredentials: true }).subscribe(function (res) {
                if (res["result"] == "fail") {
                    _this.nameValidity = "The username has been taken";
                }
                else {
                    _this.nameValidity = "";
                    var data = {
                        "username": document.getElementById("accountName").value,
                        "password": document.getElementById("password").value
                    };
                    _this.http.post(_this.url + 'login', data, { withCredentials: true }).subscribe(function (res) {
                        if (res["result"] == "success") {
                            //navigate to main page
                            _this.router.navigate(['main']);
                        }
                    });
                }
            });
        }
    };
    RegisterationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registeration',
            template: __webpack_require__(/*! ./registeration.component.html */ "./src/app/auth/registeration/registeration.component.html"),
            styles: [__webpack_require__(/*! ./registeration.component.css */ "./src/app/auth/registeration/registeration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterationComponent);
    return RegisterationComponent;
}());



/***/ }),

/***/ "./src/app/main/following/following.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/following/following.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    height: 5rem;\n    width: 5rem;\n    padding: 10px 10px 10px 10px;\n}"

/***/ }),

/***/ "./src/app/main/following/following.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/following/following.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"picsSrcF\" />\n<p>{{ followingName }}</p>\n<app-headline [statusH]=\"statusF\"></app-headline>\n<!--\n    statusH: status in Headline\n    statusF: status in Following\n-->"

/***/ }),

/***/ "./src/app/main/following/following.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/following/following.component.ts ***!
  \*******************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _headline_headline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../headline/headline.component */ "./src/app/main/headline/headline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowingComponent = /** @class */ (function () {
    function FollowingComponent() {
    }
    FollowingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FollowingComponent.prototype, "picsSrcF", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FollowingComponent.prototype, "followingName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FollowingComponent.prototype, "statusF", void 0);
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/main/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/main/following/following.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_headline_headline_component__WEBPACK_IMPORTED_MODULE_1__["HeadlineComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/main/headline/headline.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/headline/headline.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/headline/headline.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/headline/headline.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{ statusH }}</p>\n"

/***/ }),

/***/ "./src/app/main/headline/headline.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/headline/headline.component.ts ***!
  \*****************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadlineComponent = /** @class */ (function () {
    function HeadlineComponent() {
    }
    HeadlineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeadlineComponent.prototype, "statusH", void 0);
    HeadlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headline',
            template: __webpack_require__(/*! ./headline.component.html */ "./src/app/main/headline/headline.component.html"),
            styles: [__webpack_require__(/*! ./headline.component.css */ "./src/app/main/headline/headline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadlineComponent);
    return HeadlineComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    padding: 1rem;\n    \n}\n\np {\n    text-align: left;\n    \n}\n\ntr {\n    width: 40rem;\n    height: 5rem;\n    border: 5px solid #ccc;\n    vertical-align: baseline;\n    padding: 10px 10px 10px 10px;\n    text-align: center;\n}\n\ntr:nth-child(odd) {\n    background: lightblue;\n}\n\ntr:nth-child(even) {\n    background: white;\n}\n\n#menu {\n  background-color:white;\n  height:60rem;\n  width:20rem;\n  float:left;\n  \n}\n\n#user, #followings {\n  background-color:lightblue;\n  width:15rem;\n  float:left;\n}\n\n#header {\n  background-color:lightblue;\n}\n\ndiv, ul {\n  margin : 10px 10px 15px 15px;\n  /* border-style:solid;\n  border-color: black; */\n}\n\nul {\n  list-style-type:none;\n}\n\na {\n  margin : 10px 10px 15px 15px;\n}\n\n#postText {\n  height:15rem;\n  width:20rem;\n}\n\nimg {\n  height: 5rem;\n  width: 5rem;\n  padding: 10px 10px 10px 10px;\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en-US\">\n    <head>\n        <meta name=\"author\" content=\"Youyi Wei\">\n    </head>\n    <body>\n      <div id=\"menu\">\n          <div id=\"user\">\n            <p><a id=\"logout\" [routerLink]=\"[ '/auth' ]\" (click)=\"logOut()\">Log Out</a> <a [routerLink]=\"[ '/profile' ]\">Profile</a></p>\n            <div>\n                <img src=\"{{mServ.user_avatar}}\" />\n                <p>{{ mServ.user_name }}</p>\n                <p id=\"userStatus\">{{ mServ.user_status }}</p>\n            </div>\n            <p><input id=\"newStatus\" [(ngModel)]=\"inputStatus\"><button id=\"update\" (click)=\"update()\">Update</button></p>\n          </div>\n\n          \n          <div id=\"followings\">\n            <ul>\n                <li *ngFor=\"let following of mServ.followings; let i = index\" [attr.data-index]=\"i\">\n                  <app-following [picsSrcF]=following.avatar [followingName]=following.name [statusF]=following.status></app-following>\n                  <button (click)=\"unfollow(i)\">Unfollow</button>\n                </li>\n            </ul>\n            <p><input id=\"newFollowing\" [(ngModel)]=\"inputFollowing\"><button (click)=\"addFollowing()\">Add</button></p>\n            <p>{{ addFollowingMes }}</p>\n          </div>\n      </div>\n\n      <div id=\"post\">\n          <input id=\"postText\" [(ngModel)]=\"inputPost\">\n          <p><input type=\"file\" name=\"image\" (change)=\"uploadImage($event)\" accept=\"image/png, image/jpeg, image/gif, image/jpg\"><button (click)=\"clearInput()\">Cancel</button> <button id=\"post\" (click)=\"post()\">Post</button></p>\n      </div>\n          \n      <div id=\"search\">\n          <p><input id=\"searchInput\" [(ngModel)]=\"inputSearch\" (input)=\"filterArticle(inputSearch)\" placeholder=\"by text or author\"></p>\n      </div>\n\n      <div id=\"posts\">\n        <table>\n            <tr *ngFor=\"let article of filterArticles\">\n              <app-posts class=\"posts\" [picsSrc]=article.picture [text]=article.body [author]=article.author [time]=article.date [comments]=article.comments [postId]=article._id></app-posts>\n            </tr>\n        </table>\n      </div>\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { PostsComponent } from './posts/posts.component'




var MainComponent = /** @class */ (function () {
    function MainComponent(router, http, mServ, pServ) {
        this.router = router;
        this.http = http;
        this.mServ = mServ;
        this.pServ = pServ;
        this.addFollowingMes = "";
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
    }
    MainComponent.prototype.ngOnInit = function () {
        this.mServ.getFollowing();
        this.getPosts();
        this.mServ.getUser();
    };
    MainComponent.prototype.logOut = function () {
        this.http.put(this.url + 'logout', {}, { withCredentials: true }).subscribe(function (res) {
            //console.log(res)
        });
    };
    MainComponent.prototype.getPosts = function () {
        var _this = this;
        this.http.get(this.url + 'articles/', { withCredentials: true }).subscribe(function (res) {
            _this.articles = res['articles'];
            _this.filterArticles = res["articles"];
            //console.log(this.filterArticles[1].picture)
        });
    };
    MainComponent.prototype.clearInput = function () {
        this.inputPost = null;
    };
    MainComponent.prototype.post = function () {
        var _this = this;
        this.http.post(this.url + 'article', { image: this.imgUrl, text: this.inputPost }, { withCredentials: true }).subscribe(function (res) {
            //console.log(res)
            _this.clearInput();
            _this.getPosts();
        });
    };
    MainComponent.prototype.update = function () {
        if (this.inputStatus) {
            this.mServ.user_status = this.inputStatus;
            var data = { "headline": this.inputStatus };
            this.http.put(this.url + 'headline', data, { withCredentials: true }).subscribe(function (res) {
                //console.log(res["headline"])
            });
            this.inputStatus = null;
        }
    };
    MainComponent.prototype.addFollowing = function () {
        var _this = this;
        this.addFollowingMes = "";
        this.http.put(this.url + 'following/' + this.inputFollowing, {}, { withCredentials: true }).subscribe(function (res) {
            //console.log(res["following"])
            _this.getPosts();
            _this.mServ.getFollowing();
        });
    };
    MainComponent.prototype.unfollow = function (index) {
        var _this = this;
        var name = this.mServ.followings[index].name;
        this.http.delete(this.url + 'following/' + name, { withCredentials: true }).subscribe(function (res) {
            //console.log(res["following"])
            _this.getPosts();
            _this.mServ.getFollowing();
        });
    };
    MainComponent.prototype.filterArticle = function (value) {
        this.searchKeyword = value;
        if (!value) {
            this.filterArticles = Object.assign([], this.articles);
        }
        else {
            this.filterArticles = Object.assign([], this.articles).filter(function (articles) { return articles.body.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        }
    };
    MainComponent.prototype.uploadImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.img = event.target.files[0];
            var data = new FormData();
            data.append('image', this.img, this.img.name);
            this.pServ.uploadAvatar(data).subscribe(function (res) {
                if (res['img'])
                    _this.imgUrl = res['img'];
                else
                    _this.imgUrl = '';
            });
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")],
            providers: [_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        //declarations: [ PostsComponent ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.followings = [];
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
    }
    MainService.prototype.getFollowing = function () {
        var _this = this;
        this.followings = [];
        this.http.get(this.url + 'following/', { withCredentials: true }).subscribe(function (res) {
            var followingName = res["following"];
            followingName.forEach(function (name) {
                _this.http.get(_this.url + 'avatars/' + name, { withCredentials: true }).subscribe(function (res) {
                    var following = {};
                    //name
                    following["name"] = name;
                    //avatar
                    following["avatar"] = res["avatars"][0]["avatar"];
                    //status
                    _this.http.get(_this.url + 'headlines/' + name, { withCredentials: true }).subscribe(function (res) {
                        following["status"] = res["headlines"][0]["headline"];
                        _this.followings.push(following);
                    });
                });
            });
        });
    };
    //get avatar and name
    MainService.prototype.getAvatar = function () {
        var _this = this;
        this.http.get(this.url + 'avatars/', { withCredentials: true }).subscribe(function (res) {
            _this.user_avatar = res["avatars"][0]["avatar"];
            _this.user_name = res["avatars"][0]["username"];
            //console.log(this.user_avatar)
        });
    };
    MainService.prototype.getHeadlines = function () {
        var _this = this;
        this.http.get(this.url + 'headlines/', { withCredentials: true }).subscribe(function (res) {
            _this.user_status = res["headlines"][0]["headline"];
            //console.log(this.user_status)
        });
    };
    MainService.prototype.getUser = function () {
        this.getHeadlines();
        this.getAvatar();
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/main/posts/posts.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    height: 15rem;\n    width: 20rem;\n    padding: 10px 10px 10px 10px;\n    \n}\n\np {\n    text-align: left;\n    padding: 10px 10px 10px 10px;\n}\n\nspan {\n    padding: 10px 10px 10px 10px;\n}"

/***/ }),

/***/ "./src/app/main/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <tr *ngIf=\"ifEditPost == false\">\n    <p>{{ text }}</p>\n  </tr>\n\n  <!--edit post-->\n  <tr *ngIf=\"ifEditPost == true\">\n    <input type=\"text\" value=\"{{ text }}\" id=\"inputPost\">\n    <button type=\"button\" (click)=\"editPost()\">OK</button>\n  </tr>\n\n  <tr *ngIf=\"picsSrc.length != 0\">\n    <img [src]=\"picsSrc\" />\n  </tr>\n  <!------------->\n\n  <p><span>{{ author }}</span><span>{{ time }}</span></p>\n\n  <!--comment-->\n  <tr *ngIf=\"ifComment == true\">\n    <input type=\"text\" id=\"inputNewComment\">\n    <button type=\"button\" (click)=\"comment()\">OK</button>\n  </tr>\n  <button type=\"button\" (click)=\"isComment()\">Comment</button>\n  <!----------->\n\n  <button type=\"button\" (click)=\"isEditPost()\">Edit</button>\n  <button type=\"button\" (click)=\"hideComments()\">{{ ifHideComments }}</button>\n\n  <table>\n    <tr *ngFor=\"let comment of showComments\">\n\n      <!--edit comment-->\n      <div *ngIf=\"comment._id != commentId\">\n        <p>{{ comment.author }}: {{ comment.body }}</p>\n      </div>\n\n      <div *ngIf=\"comment._id == commentId\">\n        <input type=\"text\" value=\"{{ comment.body }}\" id=\"inputComment\">\n        <button type=\"button\" (click)=\"editComment()\">OK</button>\n      </div>\n      <!---------------->\n\n      <button type=\"button\" (click)=\"isEditComment(comment._id)\">Edit</button>\n    </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.service */ "./src/app/main/posts/posts.service.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postServ, mainComp) {
        this.postServ = postServ;
        this.mainComp = mainComp;
        this.ifEditPost = false;
        this.ifComment = false;
        this.commentId = null;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.showComments = this.comments;
        this.ifHideComments = "Hide Comments";
    };
    PostsComponent.prototype.hideComments = function () {
        if (this.ifHideComments == "Hide Comments") {
            this.showComments = null;
            this.ifHideComments = "Show Comments";
        }
        else {
            this.showComments = this.comments;
            this.ifHideComments = "Hide Comments";
        }
    };
    PostsComponent.prototype.isComment = function () {
        this.ifComment = true;
    };
    PostsComponent.prototype.comment = function () {
        var _this = this;
        var inputNewComment = document.getElementById('inputNewComment').value;
        this.postServ.setArticles(this.postId, inputNewComment, '-1').subscribe(function (result) {
            _this.mainComp.getPosts();
            _this.ifComment = false;
        });
    };
    PostsComponent.prototype.isEditPost = function () {
        this.ifEditPost = true;
    };
    PostsComponent.prototype.editPost = function () {
        var _this = this;
        var inputPost = document.getElementById('inputPost').value;
        this.postServ.setArticles(this.postId, inputPost, '').subscribe(function (result) {
            _this.mainComp.getPosts();
            _this.ifEditPost = false;
        });
    };
    PostsComponent.prototype.isEditComment = function (commentId) {
        this.commentId = commentId;
    };
    PostsComponent.prototype.editComment = function () {
        var _this = this;
        var inputComment = document.getElementById('inputComment').value;
        this.postServ.setArticles(this.postId, inputComment, this.commentId).subscribe(function (result) {
            _this.mainComp.getPosts();
            _this.commentId = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostsComponent.prototype, "picsSrc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostsComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostsComponent.prototype, "author", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostsComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostsComponent.prototype, "comments", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostsComponent.prototype, "postId", void 0);
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/main/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/main/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"],
            _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.service.ts":
/*!*********************************************!*\
  !*** ./src/app/main/posts/posts.service.ts ***!
  \*********************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
    }
    PostsService.prototype.setArticles = function (postId, text, commentId) {
        return this.http.put(this.url + 'articles/' + postId, { text: text, commentId: commentId }, { withCredentials: true });
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    display: table-cell;\n\n    width: 30rem;\n    /* height: 30rem; */\n    background: lightblue;  \n    border-radius: 8px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n    padding: 40px 30px;\n    margin-right:auto;\n    margin-left:auto;\n}\n\nimg {\n    height: 10rem;\n    width: 10rem;\n    padding: 10px 10px 10px 10px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en-US\">\n    <head>\n        <meta name=\"author\" content=\"Youyi Wei\">\n    </head>\n    <body>\n        <p><a [routerLink]=\"[ '/main' ]\">Main Page</a></p>\n        <div>\n            <img id=\"userImg\" src=\"{{ pServ.avatar }}\" />\n            <form method=\"post\" enctype=\"multipart/form-data\">\n                <input type=\"file\" name=\"image\" (change)=\"uploadAvatar($event)\" accept=\"image/png, image/jpeg, image/gif, image/jpg\">\n            </form>\n\n            <br>\n            <p>Username: <input type=\"text\" placeholder=\"Username\" id=\"normalUsername\"></p>\n            <p>Password: <input type=\"text\" placeholder=\"Password\" id=\"normalPassword\"></p>\n            <button type=\"submit\" (click)=\"link()\">Link</button>\n            <button type=\"submit\" (click)=\"unlink()\">Unlink</button>\n\n        </div>\n        <div>\n            <p>Display Name: <input type=\"text\" name=\"displayName\" id=\"disname\"><span id=\"nameValue\">{{ pServ.name }}</span></p><br>\n\n            <p>Email Address: <input type=\"email\" name=\"emailAddress\" id=\"email\"><span id=\"emailValue\">{{ pServ.emailValue }}</span></p>\n            <p id=\"emailValidity\"></p>\n\n            <p>Phone Number: <input type=\"tel\" name=\"phoneNumber\" id=\"phonum\" placeholder=\"123-123-1234\"><span id=\"phonumValue\">{{ pServ.phonumValue }}</span></p>\n            <p id=\"phonumValidity\"></p>\n\n            <p>Data of Birth: <input type=\"text\" name=\"dateOfBirth\" id=\"dob\" readonly=\"readonly\" value=\"{{pServ.dateOfBirth}}\"></p><br>\n            <p id=\"dobValidity\"></p>\n\n            <p>Zipcode: <input type=\"text\" name=\"zipcode\" id=\"zipcode\" placeholder=\"12345/12345-1234\"><span id=\"zipcodeValue\">{{ pServ.zipcodeValue }}</span></p>\n            <p id=\"zipcodeValidity\"></p>\n\n            <p>Password: <input type=\"password\" id=\"password\" name=\"password\"><span id=\"passwordValue\">{{ pServ.passwordValue }}</span></p><br>\n            <p>Password Confirmation: <input type=\"password\" id=\"passwordConfir\" name=\"password confirmation\"><span id=\"passwordConfirValue\">{{ pServ.passwordValue }}</span></p>\n            <p id=\"passwValidity\"></p>\n\n            <button type=\"submit\" (click)=\"onClick()\">Update</button>\n            <p id=\"massage\"></p>\n        </div>\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(pServ, http, router) {
        this.pServ = pServ;
        this.http = http;
        this.router = router;
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        document.getElementById("emailValidity").style.visibility = "hidden";
        document.getElementById("emailValidity").innerHTML = "Email address is invalid";
        document.getElementById("phonumValidity").style.visibility = "hidden";
        document.getElementById("phonumValidity").innerHTML = "Phone number is invalid";
        document.getElementById("zipcodeValidity").style.visibility = "hidden";
        document.getElementById("zipcodeValidity").innerHTML = "Zipcode is invalid";
        document.getElementById("passwValidity").style.visibility = "hidden";
        document.getElementById("passwValidity").innerHTML = "Password not match";
        this.pServ.getProfile();
    };
    ProfileComponent.prototype.uploadAvatar = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.avatar = event.target.files[0];
            var data = new FormData();
            data.append('image', this.avatar, this.avatar.name);
            this.pServ.uploadAvatar(data).subscribe(function (res) {
                if (res['img']) {
                    _this.pServ.updateAvatar(res['img']).subscribe(function (re) {
                        _this.pServ.getProfile();
                    });
                }
            });
        }
    };
    ProfileComponent.prototype.onClick = function () {
        //display name
        var disname = document.getElementById("disname");
        //email validation
        var email = document.getElementById("email");
        var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])*/;
        var emailIsValid = 1;
        if (!emailReg.test(email.value) && email.value != "") {
            document.getElementById("emailValidity").style.visibility = "visible";
            emailIsValid = 0;
        }
        else
            document.getElementById("emailValidity").style.visibility = "hidden";
        //phone number validation
        var phonum = document.getElementById("phonum");
        var phonumReg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        var phonumIsValid = 1;
        if (!phonumReg.test(phonum.value) && phonum.value != "") {
            document.getElementById("phonumValidity").style.visibility = "visible";
            phonumIsValid = 0;
        }
        else
            document.getElementById("phonumValidity").style.visibility = "hidden";
        //zipcode validation
        var zipcode = document.getElementById("zipcode");
        var zipcodeReg = /^[0-9]{5}(-[0-9]{4})?$/;
        var zipcodeIsValid = 1;
        if (!zipcodeReg.test(zipcode.value) && zipcode.value != "") {
            document.getElementById("zipcodeValidity").style.visibility = "visible";
            zipcodeIsValid = 0;
        }
        else
            document.getElementById("zipcodeValidity").style.visibility = "hidden";
        //password validation
        var password = document.getElementById("password");
        var passwordConfir = document.getElementById("passwordConfir");
        var passwordIsValid = 1;
        if (password.value != passwordConfir.value) {
            document.getElementById("passwValidity").style.visibility = "visible";
            passwordIsValid = 0;
        }
        else
            document.getElementById("passwValidity").style.visibility = "hidden";
        var updated = [];
        if (emailIsValid && phonumIsValid && zipcodeIsValid && passwordIsValid) {
            if (disname && disname.value != "") {
                updated.push("display name updated from \"" + document.getElementById("nameValue").innerHTML + "\" to \"" + document.getElementById("disname").value + "\"");
                document.getElementById("nameValue").innerHTML = document.getElementById("disname").value;
                document.getElementById("disname").value = "";
            }
            if (email && email.value != "") {
                updated.push("email address updated from \"" + document.getElementById("emailValue").innerHTML + "\" to \"" + document.getElementById("email").value + "\"");
                var newEmail = document.getElementById("email").value;
                document.getElementById("emailValue").innerHTML = newEmail;
                document.getElementById("email").value = "";
                this.http.put(this.url + 'email', { email: newEmail }, { withCredentials: true }).subscribe(function (res) {
                    //console.log(res["email"])
                });
            }
            if (phonum && phonum.value != "") {
                updated.push("phone name updated from \"" + document.getElementById("phonumValue").innerHTML + "\" to \"" + document.getElementById("phonum").value + "\"");
                document.getElementById("phonumValue").innerHTML = document.getElementById("phonum").value;
                document.getElementById("phonum").value = "";
            }
            if (zipcode && zipcode.value != "") {
                updated.push("zipcode updated from \"" + document.getElementById("zipcodeValue").innerHTML + "\" to \"" + document.getElementById("zipcode").value + "\"");
                var newZipcode = document.getElementById("zipcode").value;
                document.getElementById("zipcodeValue").innerHTML = newZipcode;
                document.getElementById("zipcode").value = "";
                this.http.put(this.url + 'zipcode', { zipcode: newZipcode }, { withCredentials: true }).subscribe(function (res) {
                    //console.log(res["zipcode"])
                });
            }
            if (password && password.value != "") {
                updated.push("password updated from \"" + document.getElementById("passwordValue").innerHTML + "\" to \"" + document.getElementById("password").value + "\"");
                var newPassword = document.getElementById("password").value;
                document.getElementById("passwordValue").innerHTML = newPassword;
                document.getElementById("password").value = "";
                this.http.put(this.url + 'password', { password: newPassword }, { withCredentials: true }).subscribe(function (res) {
                    //console.log(res["result"])
                });
            }
            if (passwordConfir && passwordConfir.value != "") {
                document.getElementById("passwordConfirValue").innerHTML = document.getElementById("passwordConfir").value;
                document.getElementById("passwordConfir").value = "";
            }
        }
        var massage = "";
        if (updated.length)
            for (var i = 0; i < updated.length; i++)
                massage = massage + updated[i] + "<br>";
        document.getElementById("massage").innerHTML = massage;
    };
    ProfileComponent.prototype.link = function () {
        var _this = this;
        var username = document.getElementById('normalUsername').value;
        var password = document.getElementById('normalPassword').value;
        this.http.put(this.url + 'link', { username: username, password: password }, { withCredentials: true })
            .subscribe(function (res) {
            if (res['result'] === 'success') {
                _this.router.navigate(['auth']);
            }
            else {
                //console.log(res);
            }
        });
    };
    ProfileComponent.prototype.unlink = function () {
        this.http.get(this.url + 'unlink', { withCredentials: true }).subscribe();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        //this.url = "http://127.0.0.1:3000/";
        this.url = "https://youyiwei-web-ic18.herokuapp.com/";
    }
    ProfileService.prototype.getEmail = function () {
        var _this = this;
        this.http.get(this.url + 'email/', { withCredentials: true }).subscribe(function (res) {
            _this.emailValue = res["email"];
            //console.log(this.emailValue)
        });
    };
    ProfileService.prototype.getAvatar = function () {
        var _this = this;
        this.http.get(this.url + 'avatars/', { withCredentials: true }).subscribe(function (res) {
            _this.avatar = res["avatars"][0]["avatar"];
            //console.log(this.avatar)
        });
    };
    ProfileService.prototype.getZipcodeValue = function () {
        var _this = this;
        this.http.get(this.url + 'zipcode/', { withCredentials: true }).subscribe(function (res) {
            _this.zipcodeValue = res["zipcode"];
            //console.log(this.zipcodeValue)
        });
    };
    ProfileService.prototype.getDateOfBirth = function () {
        var _this = this;
        this.http.get(this.url + 'dob/', { withCredentials: true }).subscribe(function (res) {
            _this.dateOfBirth = res["dob"];
            //console.log(this.dateOfBirth)
        });
    };
    ProfileService.prototype.getProfile = function () {
        this.getEmail();
        this.getAvatar();
        this.getZipcodeValue();
        this.getDateOfBirth();
    };
    ProfileService.prototype.uploadAvatar = function (data) {
        return this.http.put(this.url + 'uploadAvatar/', data, { withCredentials: true });
    };
    ProfileService.prototype.updateAvatar = function (avatar) {
        return this.http.put(this.url + 'avatar/', { avatar: avatar }, { withCredentials: true });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youyiwei/Documents/Web/hw/hw7-frontend-youyi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map