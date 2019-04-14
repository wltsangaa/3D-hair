(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Home</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card style=\"background:#7F6CFF; box-shadow: none; border-radius: 10px\">\n\t\t<ion-card-content style=\"color:white\">\n\t\t\t<div style=\"display:inline-block;\">\n\t\t\t    <div><font size=\"3px\"><b>Your total charges are</b></font></div>\n\t\t\t    <div>\n\t\t\t    \t<font size=\"2px\">$</font>\n\t\t\t    \t<font size=\"5px\">{{user_info.charge.amount}}</font>\n\t\t\t    </div>\n\t\t\t    <div><font size=\"3px\">Due date {{user_info.charge.due_date}}</font></div>\n\t\t\t</div>\n\t\t\t<div style=\"float: right; text-align: center\">\n\t\t\t\t<button *ngIf=\"user_info.charge.amount > 0\" style=\"background: transparent; color: white; border-radius: 100px; border: 2px solid white; padding: 15px 25px 15px 25px;\">\n\t\t\t\t\t<font size=\"4px\">PAY NOW</font>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<br style=\"clear:both;\" />\n\t\t\t<hr style=\"background-color: white\"/>\n\t\t\t<div tappable (click)=\"goToPage('profile')\">\n\t\t\t\t<div style=\"display:inline-block; width: 20%\">\n\t\t\t\t\t<img [src]=\"user_info.avatar_img\" style=\"width: auto; height: 80px\"> \n\t\t\t\t</div>\n\t\t\t\t<div style=\"display:inline-block; width: 80%;\">\n\t\t\t  \t\t<div style=\"margin: 3px\"><font size=\"3px\"><b>{{user_info.username}}</b></font></div>\n\t\t\t  \t\t<div style=\"margin: 3px\"><font size=\"3px\">Using Hairstyle #1b</font></div>\n\t\t\t  \t\t<div style=\"margin: 3px\">\n\t\t\t  \t\t\t<ion-progress-bar \n\t\t\t  \t\t\t[value]=\"user_info.product.usage\" \n\t\t\t  \t\t\tstyle=\n\t\t\t  \t\t\t\"border-radius: 100px;\n\t\t\t  \t\t\t height: 15px;\n\t\t\t  \t\t\t --buffer-background: white;\n\t\t\t  \t\t\t --progress-background: #C0C0F0;\">\n\t\t\t  \t\t\t</ion-progress-bar>\n\t\t\t  \t\t</div>\n\t\t\t  \t\t<div style=\"margin: 3px\">\n\t\t\t\t  \t\t<font size=\"3px\" style=\"opacity: 0.5\">{{user_info.product.usage*100}}% Usage</font>\n\t\t\t\t  \t</div>\n\t\t\t  \t</div>\n\t\t\t  \t<br style=\"clear:both;\" />\n\t\t\t</div>\n\t  \t</ion-card-content>\n\t</ion-card>\n\t<table>\n\t\t<tr>\n\t\t\t<td style=\"padding: 7px 10px 7px 10px\">\n\t\t\t\t<img src=\"/assets/imgs/home_bills.png\" (click)=\"goToPage('bill')\">\n\t\t\t</td>\n\t\t\t<td style=\"padding: 7px 10px 7px 10px\">\n\t\t\t\t<img src=\"/assets/imgs/home_bookings.png\" (click)=\"goToPage('booking')\">\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"padding: 7px 10px 7px 10px\">\n\t\t\t\t<img src=\"/assets/imgs/home_news.png\" (click)=\"goToPage('news')\">\n\t\t\t</td>\n\t\t\t<td style=\"padding: 7px 10px 7px 10px\">\n\t\t\t\t<img src=\"/assets/imgs/home_products.png\" (click)=\"goToPage('product')\">\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"padding: 7px 10px 7px 10px\">\n\t\t\t\t<img src=\"/assets/imgs/home_customer_care.png\" (click)=\"goToPage('customer_care')\">\n\t\t\t</td>\n\t\t\t<td style=\"padding: 7px 10px 7px 10px\"></td>\n\t\t</tr>\n\t</table>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        this.user_info = {
            username: "Benjamin Trolio",
            avatar_img: "/assets/imgs/avatar.png",
            charge: {
                amount: 999,
                due_date: "22/02/2019"
            },
            product: {
                name: "Hairstyle #1b",
                usage: 0.67
            }
        };
    }
    HomePage.prototype.goToPage = function (page) {
        this.router.navigate(["/" + page]);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map