(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdf-reader-pdf-reader-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pdf-reader/components/pdf/pdf.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pdf-reader/components/pdf/pdf.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <mat-form-field  appearance=\"outline\">\n        <mat-label> PDF src</mat-label>\n        <input type=\"text\" matInput [(ngModel)]=\"pdfSrc\" [placeholder]=\"placeholder\" >\n    </mat-form-field>\n    <pdf-viewer [src]=\"pdfSrc\" \n                    [render-text]=\"true\"\n                    [render-text-mode]=\"2\"\n                    (after-load-complete)=\"afterLoadComplete($event)\"\n                    (page-rendered)=\"pageRendered($event)\"\n                    style=\"display: block;\">\n    </pdf-viewer>\n</div>\n"

/***/ }),

/***/ "./src/app/pdf-reader/components/pdf/pdf.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pdf-reader/components/pdf/pdf.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n    background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGRmLXJlYWRlci9jb21wb25lbnRzL3BkZi9wZGYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BkZi1yZWFkZXIvY29tcG9uZW50cy9wZGYvcGRmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pdf-reader/components/pdf/pdf.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pdf-reader/components/pdf/pdf.component.ts ***!
  \************************************************************/
/*! exports provided: PdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfComponent", function() { return PdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PdfComponent = /** @class */ (function () {
    function PdfComponent() {
        this.pdfSrc = "";
        this.placeholder = "";
    }
    PdfComponent.prototype.ngOnInit = function () {
        this.pdfSrc = "assets/OSS_Interface_Req_v1.3.pdf";
    };
    PdfComponent.prototype.afterLoadComplete = function (evt) {
        console.log(evt);
    };
    PdfComponent.prototype.pageRendered = function (evt) {
        console.log(evt);
    };
    PdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdf',
            template: __webpack_require__(/*! raw-loader!./pdf.component.html */ "./node_modules/raw-loader/index.js!./src/app/pdf-reader/components/pdf/pdf.component.html"),
            styles: [__webpack_require__(/*! ./pdf.component.css */ "./src/app/pdf-reader/components/pdf/pdf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PdfComponent);
    return PdfComponent;
}());



/***/ }),

/***/ "./src/app/pdf-reader/pdf-reader-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PdfReaderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReaderRoutingModule", function() { return PdfReaderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pdf/pdf.component */ "./src/app/pdf-reader/components/pdf/pdf.component.ts");




var routes = [{
        path: "",
        component: _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_3__["PdfComponent"]
    }];
var PdfReaderRoutingModule = /** @class */ (function () {
    function PdfReaderRoutingModule() {
    }
    PdfReaderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PdfReaderRoutingModule);
    return PdfReaderRoutingModule;
}());



/***/ }),

/***/ "./src/app/pdf-reader/pdf-reader.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pdf-reader/pdf-reader.module.ts ***!
  \*************************************************/
/*! exports provided: PdfReaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfReaderModule", function() { return PdfReaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pdf_reader_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdf-reader-routing.module */ "./src/app/pdf-reader/pdf-reader-routing.module.ts");
/* harmony import */ var _components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pdf/pdf.component */ "./src/app/pdf-reader/components/pdf/pdf.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var PdfReaderModule = /** @class */ (function () {
    function PdfReaderModule() {
    }
    PdfReaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_pdf_pdf_component__WEBPACK_IMPORTED_MODULE_4__["PdfComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pdf_reader_routing_module__WEBPACK_IMPORTED_MODULE_3__["PdfReaderRoutingModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ]
        })
    ], PdfReaderModule);
    return PdfReaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=pdf-reader-pdf-reader-module-es5.js.map