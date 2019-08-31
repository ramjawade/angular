(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile/profile.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile/profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-profile\">\n    <div div fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxLayoutGap=\"10px\">\n        <div>toolbar</div>\n        <div class=\"quote-content\"> \n                <div fxFill fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\n                        <h1 >Hi! I'm Yash. <br> A political, social & environmental activist and an educator spreading awareness through videos. Join the fight against lies, corruption, injustice and propaganda.</h1>\n                    <img style=\"height: 90%;\" [src]=\"profileImg\" alt=\"image\">\n                </div>\n        </div>\n        \n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"10px\" >\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngFor=\"let item of [1,2,3]\" >\n                            <div class=\"text-area\">\n                                <div class=\"title\"> Collage</div>\n                                <mat-divider></mat-divider>\n                                <p class=\"header\"> Government College Of Engg. Aurangabad. </p>\n                                <p class=\"discription\">\n                                    Software Developer, Aug 2017 to Pasetnt\n                                </p>\n                            </div>\n                            <span class=\"vertical-line \"></span>\n                            <div class=\"bottom-line\"></div>\n                            <span class=\"dot\" style=\"margin-bottom: -6px;\"></span>\n                        </div>\n            </div>\n            <div style=\"    width: 100%;\n                background-color: black;\n                padding-bottom: 1px;\">\n            </div>  \n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"padding-top: 10px\" >\n                <div style=\"padding: 5px 10px 5px 10px;     background-color: darkgrey;\n                border-radius: 16%;\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngFor=\"let item of [1,2,3]\" >\n                   2018\n                </div>\n            </div>\n        </div> -->\n       <div class=\"timeline\" fxLayout=\"column\">\n           <div style=\"padding: 10px\">\n                <span style=\"font-size: 18px; \"> My Timeline</span>\n           </div>\n           <mat-divider></mat-divider>\n            <div fxLayout=\"row\" dir=\"rtl\" fxLayoutAlign=\"center stretch\">\n                <div fxFlex=\"10\"></div>    \n                <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"10px\" >\n                            <div style=\"width: 100%\"fxLayout=\"row\" fxLayoutAlign=\"center center\" dir=\"rtl\" *ngFor=\"let item of [1,2,3]\" >\n                                <div fxFlex class=\"text-area\">\n                                    <div class=\"title\"> Education</div>\n                                    <mat-divider></mat-divider>\n                                    <p class=\"header\"> Government College Of Engg. Aurangabad. </p>\n                                    <p class=\"discription\">\n                                        Software Developer, Aug 2017 to Pasetnt\n                                    </p>\n                                </div>\n                                <!-- <span class=\"vertical-line \"></span> -->\n                                <div fxFlex=\"20\" class=\"bottom-line\"></div>\n                                <span class=\"dot\" style=\"margin-left: -6px;\"></span>\n                            </div>\n                        </div>\n                    <div  style=\"width: 1px;background-color: black; height: -webkit-fill-available;\"></div>\n                    <div fxFlex=\"20\"  fxLayout=\"column\" fxLayoutAlign=\"space-around center\" style=\"padding-right: 10px\">\n                        <div style=\"padding: 5px 10px 5px 10px;     background-color: darkgrey;\n                        border-radius: 16%;\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngFor=\"let item of [1,2,3]\" >\n                           2018\n                        </div>\n                    </div>\n            </div>  \n            <mat-divider></mat-divider>\n       </div>\n       \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");




const routes = [{
        path: "",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");







let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexModule"]
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote-content{\n   /* background-image: url('./../../../assets/1500x500.png'); */\n   height: 500px;\n   text-align: center;\n   color: white;\n   background-color: lightslategrey\n}\n.vertical-line {\n   padding: 10px 0px 10px 0px;\n   background-color: #607D8B;\n   width: 2px;\n}\n.bottom-line {\n   padding-bottom: 2px;\n   background-color: black;\n    width: 50%;\n}\n.text-area {\n   padding: 10px;\n   border: 1px solid;\n   font-size: 14px;\n   background-color: white;\n   direction: ltr;\n}\n.text-area .title {\n   font-size: 16px;\n   color: #2196F3;\n   text-transform: uppercase;\n}\n.text-area .header {\n   margin: 0px;\n   margin-top: 5px;\n   font-size: 16px;\n   font-weight: 400;\n   opacity: 0.7;\n}\n.text-area .discription{\n   margin: 0px;\n   font-weight: normal;\n   font-weight: 400;\n   opacity: 0.5;\n }\n.dot {\n   padding: 6px;\n   background-color: #2196F3;\n   border-radius: 100%;\n   z-index: 9;\n }\n.timeline {\n   background-color: ghostwhite;\n   padding: 5px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLDZEQUE2RDtHQUM3RCxhQUFhO0dBQ2Isa0JBQWtCO0dBQ2xCLFlBQVk7R0FDWjtBQUNIO0FBQ0E7R0FDRywwQkFBMEI7R0FDMUIseUJBQXlCO0dBQ3pCLFVBQVU7QUFDYjtBQUNBO0dBQ0csbUJBQW1CO0dBQ25CLHVCQUF1QjtJQUN0QixVQUFVO0FBQ2Q7QUFDQTtHQUNHLGFBQWE7R0FDYixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLHVCQUF1QjtHQUN2QixjQUFjO0FBQ2pCO0FBQ0E7R0FDRyxlQUFlO0dBQ2YsY0FBYztHQUNkLHlCQUF5QjtBQUM1QjtBQUNBO0dBQ0csV0FBVztHQUNYLGVBQWU7R0FDZixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFlBQVk7QUFDZjtBQUNBO0dBQ0csV0FBVztHQUNYLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsWUFBWTtDQUNkO0FBQ0E7R0FDRSxZQUFZO0dBQ1oseUJBQXlCO0dBQ3pCLG1CQUFtQjtHQUNuQixVQUFVO0NBQ1o7QUFFQTtHQUNFLDRCQUE0QjtHQUM1QixZQUFZO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlLWNvbnRlbnR7XG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzLzE1MDB4NTAwLnBuZycpOyAqL1xuICAgaGVpZ2h0OiA1MDBweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5XG59XG4udmVydGljYWwtbGluZSB7XG4gICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICB3aWR0aDogMnB4O1xufVxuLmJvdHRvbS1saW5lIHtcbiAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNTAlO1xufVxuLnRleHQtYXJlYSB7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICBmb250LXNpemU6IDE0cHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIGRpcmVjdGlvbjogbHRyO1xufVxuLnRleHQtYXJlYSAudGl0bGUge1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgY29sb3I6ICMyMTk2RjM7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnRleHQtYXJlYSAuaGVhZGVyIHtcbiAgIG1hcmdpbjogMHB4O1xuICAgbWFyZ2luLXRvcDogNXB4O1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIG9wYWNpdHk6IDAuNztcbn1cbi50ZXh0LWFyZWEgLmRpc2NyaXB0aW9ue1xuICAgbWFyZ2luOiAwcHg7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIG9wYWNpdHk6IDAuNTtcbiB9XG4gLmRvdCB7XG4gICBwYWRkaW5nOiA2cHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgIHotaW5kZXg6IDk7XG4gfVxuXG4gLnRpbWVsaW5lIHtcbiAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XG4gICBwYWRkaW5nOiA1cHg7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() {
        this.profileImg = '../demo/assets/111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111newwhite.jpg';
    }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileComponent);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map
