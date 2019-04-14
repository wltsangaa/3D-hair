(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer_care-customer_care-module"],{

/***/ "./src/app/customer_care/customer_care.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer_care/customer_care.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomerCarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCarePageModule", function() { return CustomerCarePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_care_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer_care.page */ "./src/app/customer_care/customer_care.page.ts");







var CustomerCarePageModule = /** @class */ (function () {
    function CustomerCarePageModule() {
    }
    CustomerCarePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _customer_care_page__WEBPACK_IMPORTED_MODULE_6__["CustomerCarePage"]
                    }
                ])
            ],
            declarations: [_customer_care_page__WEBPACK_IMPORTED_MODULE_6__["CustomerCarePage"]]
        })
    ], CustomerCarePageModule);
    return CustomerCarePageModule;
}());



/***/ }),

/***/ "./src/app/customer_care/customer_care.page.html":
/*!*******************************************************!*\
  !*** ./src/app/customer_care/customer_care.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Customer Care</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<table>\n\t\t<tr>\n\t\t\t<td style=\"width:33%; height: 0px\">\n\t\t\t\t<ion-card style=\"background:#9E9E9E; box-shadow: none; border-radius: 15px; margin: 3px; height: 100%\">\n\t\t\t\t\t<ion-card-content style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<font size=4px>Give us a call<br><br><br></font>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<img src=\"/assets/imgs/customer_care_call.png\" style=\"width: auto; height: 40px; left: 0px; right: 0px; margin-left: auto; margin-right: auto; position: absolute; bottom: 10px\">\n\t\t\t\t</ion-card>\n\t\t\t</td>\n\t\t\t<td style=\"width:33%; height: 0px\">\n\t\t\t\t<ion-card style=\"background:#7C4274; box-shadow: none; border-radius: 15px; margin: 3px; height: 100%\">\n\t\t\t\t\t<ion-card-content style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<font size=4px>Common Questions<br><br><br></font>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<img src=\"/assets/imgs/customer_care_question.png\" style=\"width: auto; height: 40px; left: 0px; right: 0px; margin-left: auto; margin-right: auto; position: absolute; bottom: 10px\">\n\t\t\t\t</ion-card>\n\t\t\t</td>\n\t\t\t<td style=\"width:33%; height: 0px\">\n\t\t\t\t<ion-card style=\"background:#FF6AC3; box-shadow: none; border-radius: 15px; margin: 3px; height: 100%\">\n\t\t\t\t\t<ion-card-content style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<font size=4px>Leave us a message<br><br><br></font>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<img src=\"/assets/imgs/customer_care_message.png\" style=\"width: auto; height: 40px; left: 0px; right: 0px; margin-left: auto; margin-right: auto; position: absolute; bottom: 10px\">\n\t\t\t\t</ion-card>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\t<div style=\"margin: 15px 10px 15px 10px\">\n\t\t<font size=5px>Our stores</font>\n\t</div>\n\t<ion-list lines=\"none\">\n\t  <ion-item  [color]=\"i%2 != 0? 'white' : 'light'\" *ngFor=\"let store_info of store_infos; let i = index;\" (click)=\"viewStore(i)\">\n\t  \t<div style=\"width: 100%\">\n\t\t  \t<div style=\"padding: 10px 0px 10px 0px\">\n\t  \t\t  <font size=\"4px\"><b>{{store_info.store}}</b></font>\n\t\t\t  <br>\n\t\t\t  <font size=\"3px\" style=\"opacity: 0.3\">{{store_info.location}}</font>\n\t\t\t</div>\n\t\t</div>\n\t  </ion-item>\n\t</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/customer_care/customer_care.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/customer_care/customer_care.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9jdXN0b21lcl9jYXJlL2N1c3RvbWVyX2NhcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcl9jYXJlL2N1c3RvbWVyX2NhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/customer_care/customer_care.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer_care/customer_care.page.ts ***!
  \*****************************************************/
/*! exports provided: CustomerCarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCarePage", function() { return CustomerCarePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CustomerCarePage = /** @class */ (function () {
    function CustomerCarePage(router) {
        this.router = router;
        this.store_infos = [
            {
                store: "Central Store",
                location: "St George's Building Level 12 2 Ice House Street Central"
            },
            {
                store: "Causeway Bay Store",
                location: "23rd Floor, Hysan Place. 500 Hennessy Road, Causeway Bay"
            },
            {
                store: "Mong Kok Store",
                location: "Shop A, G/F., HSH Mongkok Plaza, 794-802 Nathan Road, Mong Kok"
            },
            {
                store: "Tsim Sha Tsui Store",
                location: "1/F, Hermes House, 10 Middle Road, Tsim Sha Tsui"
            },
            {
                store: "Kowloon Tong Store",
                location: "39 Inverness Road, Kowloon Tong"
            }
        ];
    }
    CustomerCarePage.prototype.goToSignup = function () {
        this.router.navigate(["/signup"]);
    };
    CustomerCarePage.prototype.viewStore = function (store_index) {
        console.log(store_index);
    };
    CustomerCarePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer_care',
            template: __webpack_require__(/*! ./customer_care.page.html */ "./src/app/customer_care/customer_care.page.html"),
            styles: [__webpack_require__(/*! ./customer_care.page.scss */ "./src/app/customer_care/customer_care.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerCarePage);
    return CustomerCarePage;
}());



/***/ })

}]);
//# sourceMappingURL=customer_care-customer_care-module.js.map