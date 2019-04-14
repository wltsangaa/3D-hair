(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
                    }
                ])
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Profile</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center\">\n\t<div style=\"margin: 20px\">\n\t\t<div style=\"position: relative; width: 100%; height: 160px;\">\n\t\t\t<img src=\"/assets/imgs/avatar.png\" style=\"width: auto; height: 160px; position: absolute; left: 0px; right: 0px; margin-left: auto; margin-right: auto; top: 0px; bottom: 0px; margin-top: auto; margin-bottom: auto;\">\n\t\t\t<img src=\"/assets/imgs/photo.png\" style=\"width: auto; height: 40px; position: absolute; left: 160px; right: 0px; margin-left: auto; margin-right: auto; top: 0px; bottom: 0px; margin-top: auto; margin-bottom: auto;\">\n\t\t</div>\n\t\t<br>\n\t\t<font size=\"6px\"><b>{{user_info.name}}</b></font>\n\t\t<br>\n\t\t<font size=\"4px\">{{user_info.title}}</font>\n\t</div>\n\t<ion-segment>\n\t  <ion-segment-button *ngFor=\"let subsection of subsections\" [checked]=\"subsection==selected_subsection\" (click)=\"selected_subsection=subsection\">\n\t  \t<ion-label>{{subsection}}</ion-label>\n\t  </ion-segment-button>\n\t</ion-segment>\n\t<ion-list lines=\"none\" *ngIf=\"selected_subsection==='about'\">\n\t\tHi I'm Donald Trump.\n\t</ion-list>\n\t<ion-list lines=\"none\" *ngIf=\"selected_subsection==='settings'\">\n\t\t<ion-item style=\"--ion-background-color: #FFFFFF\">\n\t\t  \t<div style=\"display: flex; align-items: center; width: 100%\">\n\t\t\t  \t<div style=\"padding: 10px 0px 10px 0px; flex: 5\">\n\t\t\t  \t\t<font size=\"3px\" style=\"opacity: 0.3\">Username</font>\n\t\t\t  \t\t<br>\n\t\t  \t\t  \t<font size=\"4px\">{{user_info.username}}</font>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"flex: 1\">\n\t\t\t\t\t<button (click)=\"editUsername()\">\n\t\t\t\t\t\t<font size=\"4px\" style=\"text-align: right; color: #FF7346\">Edit</font>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </ion-item>\n\t\t  <ion-item style=\"--ion-background-color: #FFFFFF\">\n\t\t  \t<div style=\"display: flex; align-items: center; width: 100%\">\n\t\t\t  \t<div style=\"padding: 10px 0px 10px 0px; flex: 5\">\n\t\t\t  \t\t<font size=\"3px\" style=\"opacity: 0.3\">Email</font>\n\t\t\t  \t\t<br>\n\t\t  \t\t  \t<font size=\"4px\">{{user_info.email}}</font>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"flex: 1\">\n\t\t\t\t\t<button (click)=\"editEmail()\">\n\t\t\t\t\t\t<font size=\"4px\" style=\"text-align: right; color: #FF7346\">Edit</font>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </ion-item>\n\t\t  <ion-item>\n\t\t  \t<div style=\"display: flex; align-items: center; width: 100%\">\n\t\t\t  \t<div style=\"padding: 10px 0px 10px 0px; flex: 5\">\n\t\t\t  \t\t<font size=\"3px\" style=\"opacity: 0.3\">Receive notifications</font>\n\t\t\t  \t\t<br>\n\t\t  \t\t  \t<font size=\"4px\">{{user_info.notification_toggle?\"Enabled\":\"Disabled\"}}</font>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"flex: 1; margin-right: 10px\">\n\t\t\t\t\t<ion-toggle color=\"orange\" [(ngModel)]=\"user_info.notification_toggle\">\n\t\t\t\t\t</ion-toggle>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </ion-item>\n\t</ion-list>\n\t<ion-list lines=\"none\" *ngIf=\"selected_subsection==='shots'\">\n\t\tNo shots\n\t</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfilePage = /** @class */ (function () {
    function ProfilePage(router) {
        this.router = router;
        this.user_info = {
            name: "",
            title: "",
            username: "",
            email: "",
            notification_toggle: false
        };
        this.selected_subsection = "";
        this.user_info = {
            name: "Benjamin Trolio",
            title: "UI/UX Designer",
            username: "benjamin.trolio",
            email: "basdfljakhsfd",
            notification_toggle: true
        };
        this.subsections = ["about", "settings", "shots"];
        this.selected_subsection = "settings";
    }
    ProfilePage.prototype.printSubsec = function () {
        console.log(this.selected_subsection);
    };
    ProfilePage.prototype.editUsername = function () {
    };
    ProfilePage.prototype.editEmail = function () {
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map