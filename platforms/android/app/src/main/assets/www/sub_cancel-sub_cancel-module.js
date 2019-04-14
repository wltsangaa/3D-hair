(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub_cancel-sub_cancel-module"],{

/***/ "./src/app/sub_cancel/sub_cancel.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sub_cancel/sub_cancel.module.ts ***!
  \*************************************************/
/*! exports provided: SubCancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCancelPageModule", function() { return SubCancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sub_cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub_cancel.page */ "./src/app/sub_cancel/sub_cancel.page.ts");







var SubCancelPageModule = /** @class */ (function () {
    function SubCancelPageModule() {
    }
    SubCancelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _sub_cancel_page__WEBPACK_IMPORTED_MODULE_6__["SubCancelPage"]
                    }
                ])
            ],
            declarations: [_sub_cancel_page__WEBPACK_IMPORTED_MODULE_6__["SubCancelPage"]]
        })
    ], SubCancelPageModule);
    return SubCancelPageModule;
}());



/***/ }),

/***/ "./src/app/sub_cancel/sub_cancel.page.html":
/*!*************************************************!*\
  !*** ./src/app/sub_cancel/sub_cancel.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"--ion-background-color:#FC5F61;\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--ion-background-color:#FC5F61; text-align: center\">\n\t<font size=\"6px\" style=\"color: white\">Are you sure you want to cancel your subscription?</font>\n\t<br><br><br><br><br>\n\t<img src=\"/assets/imgs/warning.png\" style=\"width: auto; height: 300px\">\n\t<br><br>\n\t<font size=\"5px\" style=\"color: white\">As stated in our subscription terms, a breach in contract without valid reason will result in a HKD 5000 surcharge</font>\n\t<br><br>\n\t<button style=\"background: transparent; color: white; border-radius: 100px; border: 2px solid white; padding: 15px 25px 15px 25px; width: 80%\">\n\t\t<font size=\"4px\">OK, I UNDERSTAND THE SURCHARGE, TAKE ME TO THE BILLING PAGE</font>\n\t</button>\n\t<br><br>\n\t<button style=\"background: transparent; color: white; border-radius: 100px; border: 2px solid white; padding: 15px 25px 15px 25px; width: 80%\">\n\t\t<font size=\"4px\">TALK TO OUR CUSTOMER SUPPORT AND LET US SOLVE YOUR PROBLEM</font>\n\t</button>\n\t<br><br>\n</ion-content>"

/***/ }),

/***/ "./src/app/sub_cancel/sub_cancel.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sub_cancel/sub_cancel.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9zdWJfY2FuY2VsL3N1Yl9jYW5jZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWJfY2FuY2VsL3N1Yl9jYW5jZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub_cancel/sub_cancel.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sub_cancel/sub_cancel.page.ts ***!
  \***********************************************/
/*! exports provided: SubCancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCancelPage", function() { return SubCancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SubCancelPage = /** @class */ (function () {
    function SubCancelPage(router) {
        this.router = router;
    }
    SubCancelPage.prototype.goToSignup = function () {
        this.router.navigate(["/signup"]);
    };
    SubCancelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub_cancel',
            template: __webpack_require__(/*! ./sub_cancel.page.html */ "./src/app/sub_cancel/sub_cancel.page.html"),
            styles: [__webpack_require__(/*! ./sub_cancel.page.scss */ "./src/app/sub_cancel/sub_cancel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubCancelPage);
    return SubCancelPage;
}());



/***/ })

}]);
//# sourceMappingURL=sub_cancel-sub_cancel-module.js.map