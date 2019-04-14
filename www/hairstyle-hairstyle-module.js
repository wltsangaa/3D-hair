(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hairstyle-hairstyle-module"],{

/***/ "./src/app/hairstyle/hairstyle.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hairstyle/hairstyle.module.ts ***!
  \***********************************************/
/*! exports provided: HairstylePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairstylePageModule", function() { return HairstylePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hairstyle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hairstyle.page */ "./src/app/hairstyle/hairstyle.page.ts");







var HairstylePageModule = /** @class */ (function () {
    function HairstylePageModule() {
    }
    HairstylePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _hairstyle_page__WEBPACK_IMPORTED_MODULE_6__["HairstylePage"]
                    }
                ])
            ],
            declarations: [_hairstyle_page__WEBPACK_IMPORTED_MODULE_6__["HairstylePage"]]
        })
    ], HairstylePageModule);
    return HairstylePageModule;
}());



/***/ }),

/***/ "./src/app/hairstyle/hairstyle.page.html":
/*!***********************************************!*\
  !*** ./src/app/hairstyle/hairstyle.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <b>Pick a Hairstyle</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center\">\n\t<table style=\"margin: 10px; margin-left: auto; margin-right: auto;\">\n\t\t<tr *ngFor=\"let _ of [].constructor(hairstyles.length/2); let i = index\">\n\t\t\t<td *ngFor=\"let hairstyle of hairstyles.slice(i*2,(i+1)*2); let j = index\">\n\t\t\t\t<img [src]=\"hairstyle.photo\" (click)=\"hairstyleSelect(i*2+j)\">\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</ion-content>"

/***/ }),

/***/ "./src/app/hairstyle/hairstyle.page.scss":
/*!***********************************************!*\
  !*** ./src/app/hairstyle/hairstyle.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header::after {\n  background-image: none; }\n\ntd {\n  padding: 10px 15px 10px 15px;\n  text-align: center; }\n\nimg {\n  width: auto;\n  height: 180px; }\n\nion-row {\n  width: 100%;\n  height: auto; }\n\nion-col {\n  width: auto; }\n\nimg {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW5yeWNoYWsvRGVza3RvcC9NeSBTdHVmZi9TdGFydC11cHMvM0RIYWlyLzNELWhhaXIvc3JjL2FwcC9oYWlyc3R5bGUvaGFpcnN0eWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHNCQUFzQixFQUFBOztBQUd0QjtFQUNDLDRCQUE0QjtFQUM1QixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdkO0VBQVUsV0FBVTtFQUFFLFlBQVcsRUFBQTs7QUFDakM7RUFBVSxXQUFVLEVBQUE7O0FBQ3BCO0VBQU0sV0FBVTtFQUFFLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hhaXJzdHlsZS9oYWlyc3R5bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxudGQge1xuXHRwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG5cdHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IDE4MHB4O1xufVxuXG5pb24tcm93IHsgd2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IH1cbmlvbi1jb2wgeyB3aWR0aDphdXRvOyB9XG5pbWcgeyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/hairstyle/hairstyle.page.ts":
/*!*********************************************!*\
  !*** ./src/app/hairstyle/hairstyle.page.ts ***!
  \*********************************************/
/*! exports provided: HairstylePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairstylePage", function() { return HairstylePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HairstylePage = /** @class */ (function () {
    function HairstylePage(router) {
        this.router = router;
        this.hairstyles = [
            {
                photo: "/assets/imgs/hairstyle_1.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_2.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_3.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_4.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_5.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_6.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_7.jpg"
            },
            {
                photo: "/assets/imgs/hairstyle_8.jpg"
            }
        ];
        this.selected_hairstyle_index = -1;
    }
    HairstylePage.prototype.goToSignup = function () {
        this.router.navigate(["/signup"]);
    };
    HairstylePage.prototype.hairstyleSelect = function (hairstyle_index) {
        this.selected_hairstyle_index = hairstyle_index;
        console.log(this.selected_hairstyle_index);
    };
    HairstylePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hairstyle',
            template: __webpack_require__(/*! ./hairstyle.page.html */ "./src/app/hairstyle/hairstyle.page.html"),
            styles: [__webpack_require__(/*! ./hairstyle.page.scss */ "./src/app/hairstyle/hairstyle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HairstylePage);
    return HairstylePage;
}());



/***/ })

}]);
//# sourceMappingURL=hairstyle-hairstyle-module.js.map