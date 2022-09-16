"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_filtros_filtros_module_ts"],{

/***/ 5196:
/*!***************************************************!*\
  !*** ./src/app/filtros/filtros-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltrosPageRoutingModule": () => (/* binding */ FiltrosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _filtros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtros.page */ 3061);




const routes = [
    {
        path: '',
        component: _filtros_page__WEBPACK_IMPORTED_MODULE_0__.FiltrosPage
    }
];
let FiltrosPageRoutingModule = class FiltrosPageRoutingModule {
};
FiltrosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FiltrosPageRoutingModule);



/***/ }),

/***/ 5293:
/*!*******************************************!*\
  !*** ./src/app/filtros/filtros.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltrosPageModule": () => (/* binding */ FiltrosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _filtros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtros-routing.module */ 5196);
/* harmony import */ var _filtros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtros.page */ 3061);







let FiltrosPageModule = class FiltrosPageModule {
};
FiltrosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filtros_routing_module__WEBPACK_IMPORTED_MODULE_0__.FiltrosPageRoutingModule
        ],
        declarations: [_filtros_page__WEBPACK_IMPORTED_MODULE_1__.FiltrosPage]
    })
], FiltrosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_filtros_filtros_module_ts.js.map