(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
                    }
                ])
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.html":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Sign In</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <font size=5px>Sign in</font>\n    <br>\n    <br>\n    <br>\n    <ion-list>\n      <div class=\"center_wrapper\">\n        <ion-text color=\"dark-purple\" style=\"font-size: 14px\">\n          Username\n        </ion-text>\n      </div>\n      <ion-item>\n        <img src=\"/assets/imgs/person.png\" width=auto height=30px style=\"opacity: 0.25; position: absolute;\">\n        <ion-input type=\"text\" [(ngModel)]=\"user_input.username\" style=\"text-align: center\"></ion-input>\n      </ion-item>\n      <br>\n      <div class=\"center_wrapper\">\n        <ion-text color=\"dark-purple\" style=\"font-size: 14px\">\n          Password\n        </ion-text>\n      </div>\n      <ion-item>\n        <img src=\"/assets/imgs/password.png\" width=auto height=30px style=\"opacity: 0.25; position: absolute;\">\n        <ion-input type=\"password\" [(ngModel)]=\"user_input.password\" style=\"text-align: center\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"errorMessage != Null\">\n        Incorrect Email/Password\n      </div>\n    </ion-list>\n  </div>\n  <br>\n  <div class=\"center_wrapper\">\n    <ion-button shape=\"round\" color=\"purple\" style=\"width: 85%; height: 40px\" [disabled]=\"!user_input.username || !user_input.password\" (click)=\"login()\">\n      <ion-text color=\"white\" style=\"font-size: 15px\">\n        SIGN IN\n      </ion-text>\n    </ion-button>\n  </div>\n  <div class=\"center_wrapper\" style=\"margin: 6px\">\n    <button ion-button (click)=\"passwordRecovery()\">\n      <ion-text color=\"dark-purple\" style=\"font-size: 14px\">\n          Forgot password?\n      </ion-text>\n    </button>\n  </div>\n  <br>\n  <div class=\"center_wrapper\">\n      or\n  </div>\n  <br>\n  <div class=\"center_wrapper\" style=\"margin: 6px\">\n    <img src=\"/assets/imgs/facebook.png\" width=auto height=50px style=\"margin-left: 25px; margin-right: 25px;\">\n    <img src=\"/assets/imgs/google_plus.png\" width=auto height=50px style=\"margin-left: 25px; margin-right: 25px;\">\n  </div>\n  <div class=\"center_wrapper\" style=\"margin: 6px\">\n    <ion-text color=\"dark-purple\" style=\"font-size: 14px\">\n        Don't have an account?\n    </ion-text>\n    <button (click)=\"goToSignup()\">\n      <ion-text color=\"purple\" style=\"font-size: 14px\">\n          SIGN UP\n      </ion-text>\n    </button>\n  </div>\n  <br>\n  <div class=\"center_wrapper\" style=\"margin: 6px\">\n    <img src=\"/assets/imgs/three_d_hair_logo.png\">\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XG5iYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SigninPage = /** @class */ (function () {
    function SigninPage(router) {
        this.router = router;
        this.user_input = {
            username: "",
            password: ""
        };
    }
    SigninPage.prototype.goToSignup = function () {
        this.router.navigate(["/signup"]);
    };
    SigninPage.prototype.login = function () {
        console.log(this.user_input);
        this.router.navigate(["/home"]);
    };
    SigninPage.prototype.passwordRecovery = function () {
    };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module.js.map