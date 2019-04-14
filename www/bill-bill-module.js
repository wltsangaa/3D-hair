(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-bill-module"],{

/***/ "./src/app/bill/bill.module.ts":
/*!*************************************!*\
  !*** ./src/app/bill/bill.module.ts ***!
  \*************************************/
/*! exports provided: BillPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPageModule", function() { return BillPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bill_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill.page */ "./src/app/bill/bill.page.ts");







var BillPageModule = /** @class */ (function () {
    function BillPageModule() {
    }
    BillPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _bill_page__WEBPACK_IMPORTED_MODULE_6__["BillPage"]
                    }
                ])
            ],
            declarations: [_bill_page__WEBPACK_IMPORTED_MODULE_6__["BillPage"]]
        })
    ], BillPageModule);
    return BillPageModule;
}());



/***/ }),

/***/ "./src/app/bill/bill.page.html":
/*!*************************************!*\
  !*** ./src/app/bill/bill.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>My Bills</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<table>\n\t\t<tr>\n\t\t\t<td style=\"width:33%; height: 0px\">\n\t\t\t\t<ion-card style=\"background:#7F6CFF; box-shadow: none; border-radius: 15px; margin: 3px; height: 100%\">\n\t\t\t\t\t<ion-card-content style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<div style=\"padding: 5px\">\n\t\t\t\t\t\t\t<font size=4px>Past Bookings</font>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<div style=\"color:white; text-align:center; width: 100%; position: absolute; bottom: 6px;\">\n\t\t\t\t\t\t<hr style=\"background-color: white\"/>\n\t\t\t\t\t\t<font size=4px>{{bill_info.num_past_booking}}</font>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</td>\n\t\t\t<td style=\"width:33%; height: 0px\">\n\t\t\t\t<ion-card style=\"background:#FF6CF4; box-shadow: none; border-radius: 15px; margin: 3px; height: 100%\">\n\t\t\t\t\t<ion-card-content style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<div style=\"padding: 5px\">\n\t\t\t\t\t\t\t<font size=4px>Bookings Left</font>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<div style=\"color:white; text-align:center; width: 100%; position: absolute; bottom: 6px;\">\n\t\t\t\t\t\t<hr style=\"background-color: white\"/>\n\t\t\t\t\t\t<font size=4px>{{bill_info.num_bookings_left}}</font>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</td>\n\t\t\t<td style=\"width:33%; height: 0px\">\n\t\t\t\t<ion-card style=\"background:#7F6CFF; box-shadow: none; border-radius: 15px; margin: 3px; height: 100%\">\n\t\t\t\t\t<ion-card-content style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<div style=\"padding: 5px\">\n\t\t\t\t\t\t\t<font size=4px>Subscription Ends On</font>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<div style=\"color:white; text-align:center;\">\n\t\t\t\t\t\t<hr style=\"background-color: white\"/>\n\t\t\t\t\t\t<font size=4px>{{bill_info.subscription_end_date}}</font>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\t<div style=\"margin: 15px 10px 15px 10px\">\n\t\t<font size=5px>Past Transactions</font>\n\t</div>\n\t<ion-list lines=\"none\">\n\t  <ion-item [color]=\"i%2 != 0? 'white' : 'light'\" *ngFor=\"let transaction of transactions; let i = index;\" (click)=\"selectTransaction(i)\">\n\t  \t<div style=\"display: flex; align-items: center; width: 100%\">\n\t\t  \t<div style=\"padding: 10px 0px 10px 0px; flex: 5\">\n\t  \t\t  <font size=\"4px\"><b>{{transaction.title}}</b></font>\n\t\t\t  <br>\n\t\t\t  <font size=\"3px\" style=\"opacity: 0.3\"> {{transaction.description}}</font>\n\t\t\t</div>\n\t\t\t<div style=\"flex: 1\">\n\t\t\t\t<font size=\"4px\" style=\"opacity: 0.3; text-align: right\">${{transaction.price}}</font>\n\t\t\t</div>\n\t\t</div>\n\t  </ion-item>\n\t</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/bill/bill.page.scss":
/*!*************************************!*\
  !*** ./src/app/bill/bill.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n.row {\n  display: flex; }\n\n.col {\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9iaWxsL2JpbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUE7O0FBR3RCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmlsbC9iaWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXI6OmFmdGVyIHtcbmJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bill/bill.page.ts":
/*!***********************************!*\
  !*** ./src/app/bill/bill.page.ts ***!
  \***********************************/
/*! exports provided: BillPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPage", function() { return BillPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BillPage = /** @class */ (function () {
    function BillPage(router) {
        this.router = router;
        this.bill_info = {
            num_past_booking: 14,
            num_bookings_left: 10,
            subscription_end_date: "2/12/2010"
        };
        this.transactions = [
            {
                title: "Hair Wig Subscription",
                description: "Hairstyle #1b - 14th Month",
                price: 999
            },
            {
                title: "Hair Wig Subscription",
                description: "Hairstyle #1b - 13th Month",
                price: 999
            },
            {
                title: "Hair Treatment",
                description: "Supreme Hair Root Energizer",
                price: 400
            },
            {
                title: "Hair Wig Subscription",
                description: "Hairstyle #1b - 12th Month",
                price: 999
            },
            {
                title: "Hair Wig Subscription",
                description: "Hairstyle #1b - 11th Month",
                price: 999
            }
        ];
    }
    BillPage.prototype.goToSignup = function () {
        this.router.navigate(["/signup"]);
    };
    BillPage.prototype.selectTransaction = function (selected_index) {
        console.log(selected_index);
    };
    BillPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! ./bill.page.html */ "./src/app/bill/bill.page.html"),
            styles: [__webpack_require__(/*! ./bill.page.scss */ "./src/app/bill/bill.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BillPage);
    return BillPage;
}());



/***/ })

}]);
//# sourceMappingURL=bill-bill-module.js.map