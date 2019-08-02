(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["a-a-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project/a/components/a1/a1.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/a/components/a1/a1.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>a1 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/a/components/a2/a2.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/a/components/a2/a2.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>a2 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/a/components/a3/a3.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/a/components/a3/a3.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>a3 works!</p>\n"

/***/ }),

/***/ "./src/app/project/a/a-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/project/a/a-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ARoutingModule, AroutedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARoutingModule", function() { return ARoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroutedComponents", function() { return AroutedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_a1_a1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/a1/a1.component */ "./src/app/project/a/components/a1/a1.component.ts");
/* harmony import */ var _components_a2_a2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/a2/a2.component */ "./src/app/project/a/components/a2/a2.component.ts");
/* harmony import */ var _components_a3_a3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/a3/a3.component */ "./src/app/project/a/components/a3/a3.component.ts");






const routes = [{
        path: "",
        component: _components_a1_a1_component__WEBPACK_IMPORTED_MODULE_3__["A1Component"]
    }, {
        path: "a2",
        component: _components_a2_a2_component__WEBPACK_IMPORTED_MODULE_4__["A2Component"]
    }, {
        path: "a3",
        component: _components_a3_a3_component__WEBPACK_IMPORTED_MODULE_5__["A3Component"]
    }];
let ARoutingModule = class ARoutingModule {
};
ARoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ARoutingModule);

const AroutedComponents = [_components_a1_a1_component__WEBPACK_IMPORTED_MODULE_3__["A1Component"], _components_a2_a2_component__WEBPACK_IMPORTED_MODULE_4__["A2Component"], _components_a3_a3_component__WEBPACK_IMPORTED_MODULE_5__["A3Component"]];


/***/ }),

/***/ "./src/app/project/a/a.module.ts":
/*!***************************************!*\
  !*** ./src/app/project/a/a.module.ts ***!
  \***************************************/
/*! exports provided: AModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AModule", function() { return AModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _a_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./a-routing.module */ "./src/app/project/a/a-routing.module.ts");




let AModule = class AModule {
};
AModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_a_routing_module__WEBPACK_IMPORTED_MODULE_3__["AroutedComponents"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _a_routing_module__WEBPACK_IMPORTED_MODULE_3__["ARoutingModule"]
        ]
    })
], AModule);



/***/ }),

/***/ "./src/app/project/a/components/a1/a1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project/a/components/a1/a1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYS9jb21wb25lbnRzL2ExL2ExLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/a/components/a1/a1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/a/components/a1/a1.component.ts ***!
  \*********************************************************/
/*! exports provided: A1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A1Component", function() { return A1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let A1Component = class A1Component {
    constructor() { }
    ngOnInit() {
    }
};
A1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-a1',
        template: __webpack_require__(/*! raw-loader!./a1.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/a/components/a1/a1.component.html"),
        styles: [__webpack_require__(/*! ./a1.component.css */ "./src/app/project/a/components/a1/a1.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], A1Component);



/***/ }),

/***/ "./src/app/project/a/components/a2/a2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project/a/components/a2/a2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYS9jb21wb25lbnRzL2EyL2EyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/a/components/a2/a2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/a/components/a2/a2.component.ts ***!
  \*********************************************************/
/*! exports provided: A2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A2Component", function() { return A2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let A2Component = class A2Component {
    constructor() { }
    ngOnInit() {
    }
};
A2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-a2',
        template: __webpack_require__(/*! raw-loader!./a2.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/a/components/a2/a2.component.html"),
        styles: [__webpack_require__(/*! ./a2.component.css */ "./src/app/project/a/components/a2/a2.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], A2Component);



/***/ }),

/***/ "./src/app/project/a/components/a3/a3.component.css":
/*!**********************************************************!*\
  !*** ./src/app/project/a/components/a3/a3.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYS9jb21wb25lbnRzL2EzL2EzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/a/components/a3/a3.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/project/a/components/a3/a3.component.ts ***!
  \*********************************************************/
/*! exports provided: A3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A3Component", function() { return A3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let A3Component = class A3Component {
    constructor() { }
    ngOnInit() {
    }
};
A3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-a3',
        template: __webpack_require__(/*! raw-loader!./a3.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/a/components/a3/a3.component.html"),
        styles: [__webpack_require__(/*! ./a3.component.css */ "./src/app/project/a/components/a3/a3.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], A3Component);



/***/ })

}]);
//# sourceMappingURL=a-a-module-es2015.js.map