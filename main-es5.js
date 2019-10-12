(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <mat-toolbar color=\"primary\" class=\"example-header\">\n  <button mat-icon-button (click)=\"sidenav.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span class=\"example-fill-remaining-space\"></span>\n  <i class=\"material-icons md-24\" [matMenuTriggerFor]=\"menu\">notification_important</i>\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n</mat-toolbar> -->\n<mat-menu #menu=\"matMenu\">\n  <ng-template matMenuContent>\n    <button mat-menu-item>\n      <mat-icon>dialpad</mat-icon>\n      <span>ABC</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>share</mat-icon>\n      <span>DEF</span>\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"over\" class=\"example-sidenav\" [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n    [fixedBottomGap]=\"options.value.bottom\">\n    <mat-nav-list>\n      <mat-list-item routerLink=\"{{link.link}}\" *ngFor=\"let link of links\">\n        <i class=\"material-icons md-24 md-dark\">{{link.icon}}</i>\n        <a  class=\"side-nav-text\">{{ link.name }}</a>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content [formGroup]=\"options\">\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"main-page\">\n  <mat-card class=\"project-name-class\">\n      <mat-card-content> \n        Welcome to <br>\n        <!-- <span class=\"domain-name \">my.com</span> -->\n      </mat-card-content>\n  </mat-card>\n  <mat-card fxFlex class=\"mat-card-container\"> \n    <mat-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-card-title>\n          <span class=\"domain-name \">my.com </span> <br>\n          <span *ngIf=\"isValid\">Authentication Fail</span>\n      </mat-card-title>\n    </mat-card-header>\n      <mat-card-content>\n          <form fxLayout=\"column\"  fxLayoutAlign=\"center center\">\n            <mat-form-field>\n              <input matInput  placeholder=\"User Name\" required [(ngModel)]=\"userName\" [ngModelOptions]=\"{standalone:\n                true}\" >\n            </mat-form-field>  \n            <mat-form-field >\n                <input matInput placeholder=\"Password\"  required [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone:\n                  true}\" >\n              </mat-form-field>\n            </form>\n      </mat-card-content>\n      <mat-card-actions class=\"login-button\">\n        <button mat-button color=\"primary\" >Forget Password </button>\n        <span fxFlex></span>\n        <button mat-button color=\"primary\" (click)=\"goToApplication()\">Log In</button>\n      </mat-card-actions> \n  </mat-card>\n  <div fxFlex  class=\"forget-password\"> \n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\" fxLayout.lg=\"row wrap\" fxLayout=\"column\" fxLayoutGap.xs=\"10px\"  fxLayoutAlign=\"space-between none\">\n  <mat-card fxFlex.lg=\"49.5%\" class=\"mat-card-container\" >\n    <mat-card-header>\n      <mat-card-title>Overview</mat-card-title>\n    </mat-card-header>\n      <mat-card-content>\n        <mat-list fxLayout=\"column wrap\">\n          <mat-list-item> \n            <i fxFlex=\"10%\" class=\"material-icons md-24 md-dark\">layers</i>\n            <span>Income</span>\n            <span fxFlex></span>\n            31000\n          </mat-list-item>\n          <mat-list-item> \n              <i fxFlex=\"10%\" class=\"material-icons md-24 md-dark\">layers</i>\n              <span>Expenses</span>\n              <span fxFlex></span>\n              31000\n            </mat-list-item>\n            <mat-list-item> \n                <i fxFlex=\"10%\" class=\"material-icons md-24 md-dark\">layers</i>\n                <span>Credit cards</span>\n                <span fxFlex></span>\n                31000\n              </mat-list-item>\n         </mat-list>\n      </mat-card-content>\n  </mat-card>\n  <mat-card fxFlex.lg=\"49.5%\" class=\"mat-card-container\">\n      <mat-card-header>\n        <mat-card-title>Browser shares 2017</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <highcharts-chart \n          [Highcharts]=\"Highcharts\"\n          [options]=\"chartOptions\"\n          style=\"width: 100%; height: 200px; display: block;\">\n        </highcharts-chart>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/four-zero-four/four-zero-four.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/four-zero-four/four-zero-four.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  four-zero-four works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id= \"abc\" leaflet style=\"height:100%;\" \n(leafletMapReady)=\"onMapReady($event)\"\n[leafletBaseLayers]=\"baseLayers\"\n[leafletCenter]=\"center\"\n[leafletFitBounds]=\"fitBounds\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/temp/temp.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/temp/temp.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-temp\">\n  <button mat-button *ngIf=\"(isLargeScreen | async)\" (click)=\"toggleFilter()\">Click me!</button>  \n  <mat-drawer-container class=\"example-container\">\n      <mat-drawer [mode]=\" (isLargeScreen | async )? 'over' : 'side'\" [opened]=\"!(isLargeScreen | async) && (openDrawer)\">\n        \n        <div class=\"filter-padding\">Filters</div>\n        <mat-divider></mat-divider>\n        <mat-accordion>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Shirts\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <mat-list role=\"list\">\n                  <mat-list-item role=\"listitem\">All Shirts</mat-list-item>\n                <mat-list-item role=\"listitem\">Fromal Shirts</mat-list-item>\n                <mat-list-item role=\"listitem\">Party Wear</mat-list-item>\n              </mat-list>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Mobiles & Accessories\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-list role=\"list\">\n                  <mat-list-item role=\"listitem\">All </mat-list-item>\n                  <mat-list-item role=\"listitem\">Moboies</mat-list-item>\n                  <mat-list-item role=\"listitem\">Tablets</mat-list-item>\n                  <mat-list-item role=\"listitem\">Mobile Accessories</mat-list-item>\n                </mat-list>\n              </mat-expansion-panel>\n        </mat-accordion>\n          \n      </mat-drawer>\n      <mat-drawer-content>\n        <div fxFlex fxLayout=\"column\">\n          <div fxLayout=\"column\">\n            <div>\n                Home > ClothingMen's > Clothing\n            </div>\n            <div>\n                Ranging from t-shirts, shirts, jeans, trousers, suits and blazers to sweaters and other seasonal wear, discover a comprehensive range of men’s clothing on Flipkart. Shop among Wrangler, Peter England, Lee, Metronaut, Indian Terrain, United Colors of Benetton and other big-wigs.\n            </div>\n            <div>\n                Men's Clothing(Showing 1 – 40 products of 90,867 products)\n            </div>\n          </div>\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around start\" >\n              <mat-card class=\"temp-card\" *ngFor=\"let item of [1,2,3,4,5,6,8,2,3,4,4,5,5,5,5,6]\" fxFlex.lg=\"24.5%\">\n                  <img mat-card-image src=\"../../assets/m-style-tshirt-try-this-original-imaf8zxukgz3cjhq.jpeg\" alt=\"Photo of a Shiba Inu\">\n                  <mat-card-content>\n                      Try This\n                      Solid Men Polo Neck Black, White T-Shirt\n                      ₹480₹1,29963% off\n                      Size S, M, L, XL, XXL\n                  </mat-card-content>\n              </mat-card>\n          </div>\n        </div>\n      </mat-drawer-content>\n    </mat-drawer-container>\n</div>"

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _temp_temp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./temp/temp.component */ "./src/app/temp/temp.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./four-zero-four/four-zero-four.component */ "./src/app/four-zero-four/four-zero-four.component.ts");










var routes = [{
        path: 'temp',
        component: _temp_temp_component__WEBPACK_IMPORTED_MODULE_7__["TempComponent"]
    }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
    }, {
        path: '',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(function (m) { return m.AuthModule; }); }
    }, {
        path: 'map',
        loadChildren: function () { return __webpack_require__.e(/*! import() | g-map-g-map-module */ "g-map-g-map-module").then(__webpack_require__.bind(null, /*! ./g-map/g-map.module */ "./src/app/g-map/g-map.module.ts")).then(function (m) { return m.GMapModule; }); }
    }, {
        path: 'projects',
        loadChildren: function () { return __webpack_require__.e(/*! import() | project-project-module */ "project-project-module").then(__webpack_require__.bind(null, /*! ./project/project.module */ "./src/app/project/project.module.ts")).then(function (m) { return m.ProjectModule; }); } // # - lazy loding of module
    }, {
        path: 'pdf',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pdf-reader-pdf-reader-module */ "pdf-reader-pdf-reader-module").then(__webpack_require__.bind(null, /*! ./pdf-reader/pdf-reader.module */ "./src/app/pdf-reader/pdf-reader.module.ts")).then(function (m) { return m.PdfReaderModule; }); }
    }, {
        path: 'profile',
        loadChildren: function () { return __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts")).then(function (m) { return m.ProfileModule; }); }
    }, {
        path: "user",
        loadChildren: function () { return __webpack_require__.e(/*! import() | user-management-user-management-module */ "user-management-user-management-module").then(__webpack_require__.bind(null, /*! ./user-management/user-management.module */ "./src/app/user-management/user-management.module.ts")).then(function (m) { return m.UserManagementModule; }); }
    }, {
        path: '**',
        component: _four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_9__["FourZeroFourComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModuleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            declarations: [_temp_temp_component__WEBPACK_IMPORTED_MODULE_7__["TempComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n\n  .example-container {\n    background-color: #eee;\n    position: absolute;\n    /* top: 60px; */\n    /* bottom: 60px; */\n    left: 0;\n    right: 0;\n  }\n\n  .example-sidenav {\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 200px;\n    background: gainsboro;\n  }\n\n  .example-header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n\n  .example-footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  .side-nav-text {\n    padding-left: 10px;\n    color: #757575\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7SUFDakQsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogdG9wOiA2MHB4OyAqL1xuICAgIC8qIGJvdHRvbTogNjBweDsgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLnNpZGUtbmF2LXRleHQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzc1NzU3NVxuICB9XG4gICJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.title = 'demo';
        this.links = [
            {
                name: 'Dashboard',
                link: 'dashboard',
                icon: 'dashboard'
            }, {
                name: 'Home',
                link: 'temp',
                icon: 'home'
            }, {
                name: 'Map',
                link: 'map',
                icon: 'layers'
            },
            {
                name: 'User Management',
                link: 'user/list',
                icon: 'account_circle'
            },
            {
                name: 'Create User',
                link: 'user/create',
                icon: 'account_circle'
            }, {
                name: 'projects',
                link: 'projects',
                icon: 'power_settings_new'
            }, {
                name: 'Pdf Reader',
                link: 'pdf',
                icon: 'library_books'
            }, {
                name: 'Profile',
                link: 'profile',
                icon: 'library_books'
            }
            // ,{
            //   name :"Contact",
            //   link : "def",
            //   icon : "call"
            // }
        ];
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./four-zero-four/four-zero-four.component */ "./src/app/four-zero-four/four-zero-four.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");











/**
 * Material Module
 * Privide all Material Component
 */

/**
 * App Routing Module
 */



/**
 * Error Component
 */


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"],
                _four_zero_four_four_zero_four_component__WEBPACK_IMPORTED_MODULE_15__["FourZeroFourComponent"]
            ],
            imports: [
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModuleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"].forRoot(),
                highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




var authRoutes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModuleModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n    background: lightblue;\n}\n.mat-card-container {\n    padding: 50px;\n}\n.mat-card-container .mat-card-title {\n    color: red;\n}\n.mat-card-container mat-card-content {\n    padding-top: 25px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.project-name-class {\n    margin: 10px;\n    background: inherit;\n    box-shadow: none !important;\n    \n}\n.project-name-class mat-card-content {\n    font-size: large;\n}\n.login-button {\n    margin: 0px;\n}\nmat-form-field {\n    width: 100%;\n}\n.main-page {\n    background: #5e91f8;\n    height: 100%;\n}\n.forget-password {\n    padding: 20px;\n}\n.forget-password a {\n    padding-right: 10px;\n}\n.domain-name {\n    font-size: 50px;\n    font-family: cursive;\n    font-style: italic;\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cbi5tYXQtY2FyZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG4ubWF0LWNhcmQtY29udGFpbmVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5tYXQtY2FyZC1jb250YWluZXIgbWF0LWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4ucHJvamVjdC1uYW1lLWNsYXNzIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgXG59XG4ucHJvamVjdC1uYW1lLWNsYXNzIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4ubG9naW4tYnV0dG9uIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNWU5MWY4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5mb3JnZXQtcGFzc3dvcmQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uZm9yZ2V0LXBhc3N3b3JkIGEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uZG9tYWluLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.userName = "";
        this.password = "";
        this.isValid = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goToApplication = function () {
        if (this.userName == "admin" && this.password == "admin") {
            this.router.navigate(['/temp']);
        }
        else {
            this.router.navigate(['']);
            this.isValid = true;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n    background: lightblue;\n}\n.mat-card {\n  border-radius: 15px;\n}\n.parent {\n  padding: 10px;\n}\n.fxlayoutgapcontainer div {\n  background: red;\n}\n.small-circle {\n  padding: 5px;\n  background: red !important;\n  border-radius: 5px;\n}\n.mat-card-container {\n  margin-top: 10px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cbi5tYXQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ucGFyZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZ4bGF5b3V0Z2FwY29udGFpbmVyIGRpdiB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbi5zbWFsbC1jaXJjbGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWF0LWNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            legend: {
                layout: 'vertical',
                align: 'right',
                y: 0,
                padding: 5,
                itemMarginTop: 5,
                verticalAlign: 'top',
                itemMarginBottom: 5,
                labelFormatter: function () {
                    return '<span style="font-size: 16px; font-weight: normal">' + this.name + '</span>' + '<span fxFlex> ' + this.y + '<span>';
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: [
                        ['Borrow', 58.9],
                        ['Loan Emi', 13.29],
                        ['Rent', 13],
                        ['Others', 3.78],
                        ['Safari', 3.42],
                        {
                            name: 'Other',
                            y: 7.61,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/four-zero-four/four-zero-four.component.css":
/*!*************************************************************!*\
  !*** ./src/app/four-zero-four/four-zero-four.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdXItemVyby1mb3VyL2ZvdXItemVyby1mb3VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/four-zero-four/four-zero-four.component.ts":
/*!************************************************************!*\
  !*** ./src/app/four-zero-four/four-zero-four.component.ts ***!
  \************************************************************/
/*! exports provided: FourZeroFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourZeroFourComponent", function() { return FourZeroFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FourZeroFourComponent = /** @class */ (function () {
    function FourZeroFourComponent() {
    }
    FourZeroFourComponent.prototype.ngOnInit = function () {
    };
    FourZeroFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-four-zero-four',
            template: __webpack_require__(/*! raw-loader!./four-zero-four.component.html */ "./node_modules/raw-loader/index.js!./src/app/four-zero-four/four-zero-four.component.html"),
            styles: [__webpack_require__(/*! ./four-zero-four.component.css */ "./src/app/four-zero-four/four-zero-four.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FourZeroFourComponent);
    return FourZeroFourComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! createjs-module */ "./node_modules/createjs-module/createjs.js");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_3__);


// import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
// import { LeafletModule } from "@asymmetrik/ngx-leaflet";


var MapComponent = /** @class */ (function () {
    function MapComponent(
    // private leafletDirective: LeafletDirective
    ) {
        this.baseLayers = [leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })];
        this.center = leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([21.616579336740603, 78.57421875]);
        this.fitBounds = leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"]([[41.902277040963696, 144.14062500000003], [0.7031073524364909, 28.212890625000004]]);
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.onMapReady = function (map) {
        this.map = map;
        map.setZoom(4);
        var x = createjs_module__WEBPACK_IMPORTED_MODULE_3__;
        // const y = this.leafletDirective;
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModuleModule = /** @class */ (function () {
    function MaterialModuleModule() {
    }
    MaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            ]
        })
    ], MaterialModuleModule);
    return MaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/temp/temp.component.css":
/*!*****************************************!*\
  !*** ./src/app/temp/temp.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-temp {\n    height: 100%;\n}\n\n.example-container {\n    width: inherit;\n    height: inherit;\n  }\n\n.example-container mat-drawer {\n    background-color: #f2f1f1;\n    width: 280px;\n}\n\n.filter-padding {\n    padding: 20px;\n}\n\n.mat-expansion-panel {\n    background-color: inherit;\n}\n\n.mat-expansion-panel-spacing {\n    margin: unset;\n}\n\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n    box-shadow: 0 0px 0px 0px rgba(0,0,0,0), 0 0px 0px 0 rgba(0,0,0,0), 0 1px 0px 0 rgba(0,0,0,.1);\n}\n\n.mat-list, .mat-nav-list, .mat-selection-list {\n    padding-top: 0px;\n}\n\n.mat-list .mat-list-item {\n    height: 35px;\n    border-bottom: 1px solid;\n    border-color: #dad8d8;\n}\n\n.mat-list .mat-list-item {\n    font-size: 15px;\n    border-left: 6px solid red;\n    border-radius: 15px;\n    /* background-color: lightgrey; */\n}\n\n.temp-card {\n    margin-bottom: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcC90ZW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEZBQThGO0FBQ2xHOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wL3RlbXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQtdGVtcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4uZXhhbXBsZS1jb250YWluZXIgbWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjFmMTtcbiAgICB3aWR0aDogMjgwcHg7XG59XG5cbi5maWx0ZXItcGFkZGluZyB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nIHtcbiAgICBtYXJnaW46IHVuc2V0O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDApLCAwIDBweCAwcHggMCByZ2JhKDAsMCwwLDApLCAwIDFweCAwcHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cblxuXG4ubWF0LWxpc3QsIC5tYXQtbmF2LWxpc3QsIC5tYXQtc2VsZWN0aW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGFkOGQ4O1xufVxuXG4ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTsgKi9cbn1cblxuLnRlbXAtY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/temp/temp.component.ts":
/*!****************************************!*\
  !*** ./src/app/temp/temp.component.ts ***!
  \****************************************/
/*! exports provided: TempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempComponent", function() { return TempComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TempComponent = /** @class */ (function () {
    function TempComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        // tslint:disable-next-line: max-line-length
        this.isLargeScreen = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.heroes = ['abc', 'ss', 'ssss'];
    }
    TempComponent.prototype.ngOnInit = function () {
        this.openDrawer = true;
    };
    TempComponent.prototype.toggleFilter = function () {
        this.openDrawer = !this.openDrawer;
    };
    TempComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], TempComponent.prototype, "sidenav", void 0);
    TempComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-temp',
            template: __webpack_require__(/*! raw-loader!./temp.component.html */ "./node_modules/raw-loader/index.js!./src/app/temp/temp.component.html"),
            styles: [__webpack_require__(/*! ./temp.component.css */ "./src/app/temp/temp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], TempComponent);
    return TempComponent;
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




// import * as core from '@angular/core';
// window['@angular/core'] = core;
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

module.exports = __webpack_require__(/*! /home/ist/Study/A6/demo/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map