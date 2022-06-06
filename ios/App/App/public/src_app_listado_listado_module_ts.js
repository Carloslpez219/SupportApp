"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_listado_listado_module_ts"],{

/***/ 2097:
/*!***************************************************!*\
  !*** ./src/app/listado/listado-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPageRoutingModule": () => (/* binding */ ListadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado.page */ 6777);




const routes = [
    {
        path: '',
        component: _listado_page__WEBPACK_IMPORTED_MODULE_0__.ListadoPage
    }
];
let ListadoPageRoutingModule = class ListadoPageRoutingModule {
};
ListadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListadoPageRoutingModule);



/***/ }),

/***/ 5797:
/*!*******************************************!*\
  !*** ./src/app/listado/listado.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPageModule": () => (/* binding */ ListadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _listado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-routing.module */ 2097);
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado.page */ 6777);







let ListadoPageModule = class ListadoPageModule {
};
ListadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listado_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListadoPageRoutingModule
        ],
        declarations: [_listado_page__WEBPACK_IMPORTED_MODULE_1__.ListadoPage]
    })
], ListadoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_listado_listado_module_ts.js.map