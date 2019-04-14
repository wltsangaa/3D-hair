(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");







var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
                    }
                ])
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/news/news.page.html":
/*!*************************************!*\
  !*** ./src/app/news/news.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Latest News</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let news_feed of news_feeds\">\n\t\t\t<div style=\"display: flex; align-items: center; width: 100%\">\n\t\t\t\t<div style=\"flex: 1\">\n\t\t\t\t\t<img [src]=\"news_feed.photo\" style=\"width: 70px; height: auto;\">\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 10px 0px 10px 0px; flex: 4\">\n\t\t\t  \t\t<div>\n\t\t\t  \t\t\t<div style=\"float: left\">\n\t\t\t  \t\t\t\t<font size=\"2px\" style=\"color: #4D009A\">{{news_feed.author}}</font>\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t\t<div style=\"float: right\">\n\t\t\t  \t\t\t\t<font size=\"2px\" style=\"opacity: 0.3\">{{news_feed.time}}</font>\n\t\t\t  \t\t\t</div>\n\t\t\t  \t\t\t<br style=\"clear:both;\" />\n\t\t\t  \t\t</div>\n\t\t  \t\t  <font size=\"5px\">{{news_feed.title}}</font>\n\t\t\t\t  <br>\n\t\t\t\t  <font size=\"1px\" style=\"opacity: 0.5; letter-spacing: 3px\"><b>{{news_feed.category}}</b></font>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9uZXdzL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewsPage = /** @class */ (function () {
    function NewsPage(router) {
        this.router = router;
        this.news_feeds = [
            {
                author: "Claudiaaaa",
                time: "15 mins ago",
                title: "Hair loss is affecting your career",
                category: "BUSINESS",
                photo: "/assets/imgs/news_1.jpg"
            },
            {
                author: "Yuri",
                time: "15 mins ago",
                title: "\"Best Hair Treatment\" U Life Magazine",
                category: "LEISURE",
                photo: "/assets/imgs/news_2.jpg"
            },
            {
                author: "Benjamin",
                time: "15 mins ago",
                title: "Build a local business",
                category: "BUSINESS",
                photo: "/assets/imgs/news_3.jpg"
            },
            {
                author: "William Wong",
                time: "15 mins ago",
                title: "Anti hair loss shampoo's claims proved to be fake",
                category: "LIFESTYLE",
                photo: "/assets/imgs/news_4.jpg"
            },
            {
                author: "Alan",
                time: "15 mins ago",
                title: "The secret to healthy hair",
                category: "LIFESTYLE",
                photo: "/assets/imgs/news_5.jpg"
            }
        ];
    }
    NewsPage.prototype.goToSignup = function () {
        this.router.navigate(["/signup"]);
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map