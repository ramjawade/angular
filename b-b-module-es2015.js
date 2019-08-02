(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["b-b-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project/b/components/b1/b1.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/b/components/b1/b1.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>b1 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/b/components/b2/b2.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/b/components/b2/b2.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>b2 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/b/components/b3/b3.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/b/components/b3/b3.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>b3 works!</p>\n"

/***/ }),

/***/ "./src/app/project/b/b-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/project/b/b-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BRoutingModule, BRoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRoutingModule", function() { return BRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRoutingComponents", function() { return BRoutingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_b1_b1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/b1/b1.component */ "./src/app/project/b/components/b1/b1.component.ts");
/* harmony import */ var _components_b2_b2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/b2/b2.component */ "./src/app/project/b/components/b2/b2.component.ts");
/* harmony import */ var _components_b3_b3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/b3/b3.component */ "./src/app/project/b/components/b3/b3.component.ts");






const routes = [{
        path: "",
        component: _components_b1_b1_component__WEBPACK_IMPORTED_MODULE_3__["B1Component"]
    }, {
        path: "b2",
        component: _components_b2_b2_component__WEBPACK_IMPORTED_MODULE_4__["B2Component"]
    }, {
        path: "b3",
        component: _components_b3_b3_component__WEBPACK_IMPORTED_MODULE_5__["B3Component"]
    }];
let BRoutingModule = class BRoutingModule {
};
BRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BRoutingModule);

const BRoutingComponents = [_components_b1_b1_component__WEBPACK_IMPORTED_MODULE_3__["B1Component"], _components_b2_b2_component__WEBPACK_IMPORTED_MODULE_4__["B2Component"], _components_b3_b3_component__WEBPACK_IMPORTED_MODULE_5__["B3Component"]];


/***/ }),

/***/ "./src/app/project/b/b.module.ts":
/*!***************************************!*\
  !*** ./src/app/project/b/b.module.ts ***!
  \***************************************/
/*! exports provided: BModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BModule", function() { return BModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _b_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./b-routing.module */ "./src/app/project/b/b-routing.module.ts");




let BModule = class BModule {
};
BModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_b_routing_module__WEBPACK_IMPORTED_MODULE_3__["BRoutingComponents"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _b_routing_module__WEBPACK_IMPORTED_MODULE_3__["BRoutingModule"]
        ]
    })
], BModule);



/***/ }),

/***/ "./src/app/project/b/components/b1/b1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project/b/components/b1/b1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYi9jb21wb25lbnRzL2IxL2IxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/b/components/b1/b1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/b/components/b1/b1.component.ts ***!
  \*********************************************************/
/*! exports provided: B1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B1Component", function() { return B1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let B1Component = class B1Component {
    constructor() { }
    ngOnInit() {
    }
};
B1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-b1',
        template: __webpack_require__(/*! raw-loader!./b1.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/b/components/b1/b1.component.html"),
        styles: [__webpack_require__(/*! ./b1.component.css */ "./src/app/project/b/components/b1/b1.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], B1Component);



/***/ }),

/***/ "./src/app/project/b/components/b2/b2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project/b/components/b2/b2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYi9jb21wb25lbnRzL2IyL2IyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/b/components/b2/b2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/b/components/b2/b2.component.ts ***!
  \*********************************************************/
/*! exports provided: B2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B2Component", function() { return B2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let B2Component = class B2Component {
    constructor() { }
    ngOnInit() {
    }
};
B2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-b2',
        template: __webpack_require__(/*! raw-loader!./b2.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/b/components/b2/b2.component.html"),
        styles: [__webpack_require__(/*! ./b2.component.css */ "./src/app/project/b/components/b2/b2.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], B2Component);



/***/ }),

/***/ "./src/app/project/b/components/b3/b3.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project/b/components/b3/b3.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYi9jb21wb25lbnRzL2IzL2IzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/b/components/b3/b3.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/b/components/b3/b3.component.ts ***!
  \*********************************************************/
/*! exports provided: B3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B3Component", function() { return B3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let B3Component = class B3Component {
    constructor() { }
    ngOnInit() {
    }
};
B3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-b3',
        template: __webpack_require__(/*! raw-loader!./b3.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/b/components/b3/b3.component.html"),
        styles: [__webpack_require__(/*! ./b3.component.css */ "./src/app/project/b/components/b3/b3.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], B3Component);



/***/ })

}]);
//# sourceMappingURL=b-b-module-es2015.js.map