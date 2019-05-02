(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"],{

/***/ "./src/app/booking/booking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/*! exports provided: BookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking.page */ "./src/app/booking/booking.page.ts");







var BookingPageModule = /** @class */ (function () {
    function BookingPageModule() {
    }
    BookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]
                    }
                ])
            ],
            declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
        })
    ], BookingPageModule);
    return BookingPageModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.page.html":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Bookings</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center\">\n\t<img src=\"/assets/imgs/booking_thumbnail.jpg\" style=\"width: 100%; height: auto;\">\n\t<ion-card>\n\t\t<ion-card-content style=\"bottom: -13px\">\n\t\t\t<font size=\"4px\" style=\"color: black\">Hairstyle #1b</font>\n\t\t\t<br>\n\t\t\t<ion-slides pager=\"true\" #mySlider (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\" loop=\"true\">\n\t\t\t\t<ion-slide *ngFor=\"let product_status of product_statuses\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<font size=\"3px\" style=\"color: black; opacity: 0.5\">{{product_status}}</font><br><br>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<ion-card>\n\t\t<ion-card-content style=\"padding: 10px 0px 10px 0px\">\n\t\t\t<div class=\"scroll-container\">\n\t\t\t\t<div class=\"scroll\" scrollX=\"true\">\n\t\t\t\t\t<button class=\"month-button\" *ngFor=\"let month of months\" (click)=\"select_month(month)\" [ngClass]=\"month==selected_month?'month-button-selected':'month-button-unselected'\">\n\t\t\t\t\t\t<font size=\"3px\">{{get_month_names(month)}}</font>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"scroll-container\">\n\t\t\t\t<div style=\"background-color: #F5F5F5\" class=\"scroll\" scrollX=\"true\">\n\t\t\t\t\t<button class=\"day-button\" *ngFor=\"let day of days\" (click)=\"select_day(day)\" [ngClass]=\"day==selected_day?'day-button-selected':'day-button-unselected'\">\n\t\t\t\t\t\t<font size=\"3px\">{{day}}</font>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"scroll-container\">\n\t\t\t\t<div class=\"scroll\" scrollX=\"true\">\n\t\t\t\t\t<button class=\"duration-button\" *ngFor=\"let duration of durations\" (click)=\"select_duration(duration)\" [ngClass]=\"duration==selected_duration?'duration-button-selected':'duration-button-unselected'\">\n\t\t\t\t\t\t<font size=\"3px\">{{duration}} months</font>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<ion-card (click)=\"book()\">\n\t\t<ion-card-content style=\"padding: 15px 20px 15px 20px; background-color: #7869FF\">\n\t\t\t<div style=\"float: left\">\n\t\t\t\t<font size=\"3px\" color=\"white\">HKD$999 per month</font>\n\t\t\t</div>\n\t\t\t<div style=\"float: right\">\n\t\t\t\t<font size=\"3px\" color=\"white\">Book now</font>\n\t\t\t</div>\n\t\t\t<br style=\"clear:both;\" />\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/booking/booking.page.scss":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\n.month-button {\n  border-radius: 10px 10px 0px 0px;\n  padding: 20px 10px 20px 10px; }\n\n.month-button-selected {\n  background-color: #F5F5F5;\n  color: #7869FF; }\n\n.month-button-unselected {\n  background-color: transparent;\n  color: black; }\n\n.day-button {\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px 3px 10px 3px; }\n\n.day-button-selected {\n  background-color: #7869FF;\n  color: white; }\n\n.day-button-unselected {\n  background-color: transparent;\n  color: black; }\n\n.duration-button {\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px 3px 10px 3px; }\n\n.duration-button-selected {\n  background-color: #7869FF;\n  color: white; }\n\n.duration-button-unselected {\n  background-color: transparent;\n  color: black; }\n\n.scroll-container {\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.scroll-container ::-webkit-scrollbar {\n    display: none; }\n\n.scroll-container .scroll {\n    overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9ib29raW5nL2Jvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQXNCLEVBQUE7O0FBR3RCO0VBQ0MsZ0NBQWdDO0VBQ2hDLDRCQUE0QixFQUFBOztBQUc3QjtFQUNDLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2Y7RUFDQyw2QkFBNkI7RUFDN0IsWUFBWSxFQUFBOztBQUdiO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHMUI7RUFDQyx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdiO0VBQ0MsNkJBQTZCO0VBQzdCLFlBQVksRUFBQTs7QUFHYjtFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzFCO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHYjtFQUNDLDZCQUE2QjtFQUM3QixZQUFZLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUhyQjtJQUtJLGFBQWEsRUFBQTs7QUFMakI7SUFRSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nL2Jvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLm1vbnRoLWJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuXHRwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xufVxuXG4ubW9udGgtYnV0dG9uLXNlbGVjdGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcblx0Y29sb3I6ICM3ODY5RkY7XG59XG5cbi5tb250aC1idXR0b24tdW5zZWxlY3RlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5kYXktYnV0dG9uIHtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMTBweDtcblx0bWFyZ2luOiAxMHB4IDNweCAxMHB4IDNweDsgXG59XG5cbi5kYXktYnV0dG9uLXNlbGVjdGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzc4NjlGRjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uZGF5LWJ1dHRvbi11bnNlbGVjdGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuLmR1cmF0aW9uLWJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdG1hcmdpbjogMTBweCAzcHggMTBweCAzcHg7IFxufVxuXG4uZHVyYXRpb24tYnV0dG9uLXNlbGVjdGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzc4NjlGRjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uZHVyYXRpb24tYnV0dG9uLXVuc2VsZWN0ZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2Nyb2xsIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/booking/booking.page.ts":
/*!*****************************************!*\
  !*** ./src/app/booking/booking.page.ts ***!
  \*****************************************/
/*! exports provided: BookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPage", function() { return BookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BookingPage = /** @class */ (function () {
    function BookingPage(router) {
        this.router = router;
        this.months = this.get_coming_n_months(12);
        this.days = [];
        this.durations = [1, 2, 3];
        this.product_statuses = ["Using since 1/23/2019", "Fixed Contract Ended"];
    }
    BookingPage.prototype.get_range = function (start, end) {
        var arr = [];
        for (var i = start; i < end; ++i)
            arr.push(i);
        return arr;
    };
    BookingPage.prototype.get_day_range = function (month) {
        switch ((month % 100 - 1) % 12 + 1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return this.get_range(1, 31 + 1);
            case 4:
            case 6:
            case 9:
            case 11:
                return this.get_range(1, 30 + 1);
            case 2:
                if (Math.floor(month / 100) % 4 == 0)
                    return this.get_range(1, 29 + 1);
                else
                    return this.get_range(1, 28 + 1);
        }
    };
    BookingPage.prototype.get_coming_n_months = function (n) {
        var today = new Date();
        var curr_month = today.getMonth(); // 0 start
        var curr_year = today.getFullYear();
        var months = [];
        for (var i = 0; i < n; ++i) {
            var new_year = Math.floor((curr_month + i) / 12) + curr_year;
            var new_month = (curr_month + i) % 12;
            months.push(new_year * 100 + new_month + 1);
        }
        return months;
    };
    BookingPage.prototype.get_month_names = function (month) {
        var month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month_name = month_names[month % 100 - 1];
        if (((new Date()).getFullYear() != Math.floor(month / 100))) {
            var year_name = Math.floor(month / 100).toString();
            return month_name + " " + year_name;
        }
        else
            return month_name;
    };
    BookingPage.prototype.select_month = function (month) {
        this.selected_month = month;
        this.days = this.get_day_range(month);
    };
    BookingPage.prototype.select_day = function (day) {
        this.selected_day = day;
    };
    BookingPage.prototype.select_duration = function (duration) {
        this.selected_duration = duration;
    };
    BookingPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    BookingPage.prototype.book = function () {
        console.log(this.selected_month);
        console.log(this.selected_day);
        console.log(this.selected_duration);
    };
    BookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.page.html */ "./src/app/booking/booking.page.html"),
            styles: [__webpack_require__(/*! ./booking.page.scss */ "./src/app/booking/booking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookingPage);
    return BookingPage;
}());



/***/ })

}]);
//# sourceMappingURL=booking-booking-module.js.map