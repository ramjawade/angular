(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project/create-project/create-project.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/create-project/create-project.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-project works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/projct-listing/projct-listing.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/projct-listing/projct-listing.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/projects/create']\" routerLinkActive=\"router-link-active\" > create</a>\n<p>\n  here is projct-listing\n  <br>\n  <a [routerLink]= \"['/projects/a']\" routerLinkActive=\"router-link-active\"> module a</a>\n  <br>\n  <a [routerLink]= \"['/projects/b']\" routerLinkActive=\"router-link-active\"> module b</a>\n  <br>\n  <a [routerLink]= \"['/projects/c']\" routerLinkActive=\"router-link-active\"> module c</a>\n</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/project/project.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/project/project.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/project/create-project/create-project.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/project/create-project/create-project.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvY3JlYXRlLXByb2plY3QvY3JlYXRlLXByb2plY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/project/create-project/create-project.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/project/create-project/create-project.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function() { return CreateProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateProjectComponent = class CreateProjectComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreateProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-project',
        template: __webpack_require__(/*! raw-loader!./create-project.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/create-project/create-project.component.html"),
        styles: [__webpack_require__(/*! ./create-project.component.css */ "./src/app/project/create-project/create-project.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateProjectComponent);



/***/ }),

/***/ "./src/app/project/projct-listing/projct-listing.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/project/projct-listing/projct-listing.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamN0LWxpc3RpbmcvcHJvamN0LWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/project/projct-listing/projct-listing.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/project/projct-listing/projct-listing.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjctListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjctListingComponent", function() { return ProjctListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjctListingComponent = class ProjctListingComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjctListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projct-listing',
        template: __webpack_require__(/*! raw-loader!./projct-listing.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/projct-listing/projct-listing.component.html"),
        styles: [__webpack_require__(/*! ./projct-listing.component.css */ "./src/app/project/projct-listing/projct-listing.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjctListingComponent);



/***/ }),

/***/ "./src/app/project/project-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/project/project-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project/project.component.ts");
/* harmony import */ var _projct_listing_projct_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projct-listing/projct-listing.component */ "./src/app/project/projct-listing/projct-listing.component.ts");
/* harmony import */ var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-project/create-project.component */ "./src/app/project/create-project/create-project.component.ts");






const projectRoutes = [
    {
        path: '',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"],
        children: [
            // projects/id or projects
            {
                path: '',
                children: [
                    {
                        path: '',
                        component: _projct_listing_projct_listing_component__WEBPACK_IMPORTED_MODULE_4__["ProjctListingComponent"]
                    },
                    {
                        path: 'create',
                        component: _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectComponent"]
                    }
                ]
            }
        ]
    }, {
        path: "a",
        loadChildren: () => __webpack_require__.e(/*! import() | a-a-module */ "a-a-module").then(__webpack_require__.bind(null, /*! ./a/a.module */ "./src/app/project/a/a.module.ts")).then(mod => mod.AModule)
    }, {
        path: "b",
        loadChildren: () => __webpack_require__.e(/*! import() | b-b-module */ "b-b-module").then(__webpack_require__.bind(null, /*! ./b/b.module */ "./src/app/project/b/b.module.ts")).then(mod => mod.BModule)
    }, {
        path: "c",
        loadChildren: () => __webpack_require__.e(/*! import() | c-c-module */ "c-c-module").then(__webpack_require__.bind(null, /*! ./c/c.module */ "./src/app/project/c/c.module.ts")).then(mod => mod.CModule)
    }
];
let ProjectRoutingModule = class ProjectRoutingModule {
};
ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(projectRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectRoutingModule);



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/project/project-routing.module.ts");
/* harmony import */ var _projct_listing_projct_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projct-listing/projct-listing.component */ "./src/app/project/projct-listing/projct-listing.component.ts");
/* harmony import */ var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-project/create-project.component */ "./src/app/project/create-project/create-project.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project/project.component.ts");







let ProjectModule = class ProjectModule {
};
ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectRoutingModule"]
        ],
        declarations: [_projct_listing_projct_listing_component__WEBPACK_IMPORTED_MODULE_4__["ProjctListingComponent"], _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"]],
        exports: [_projct_listing_projct_listing_component__WEBPACK_IMPORTED_MODULE_4__["ProjctListingComponent"], _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"]] // why ?
    })
], ProjectModule);



/***/ }),

/***/ "./src/app/project/project/project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/project/project/project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project/project/project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/project/project/project.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectComponent = class ProjectComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/project/project.component.html"),
        styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project/project.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectComponent);



/***/ })

}]);
//# sourceMappingURL=project-project-module-es2015.js.map