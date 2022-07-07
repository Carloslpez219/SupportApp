"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-ticket_mostrar-ticket_module_ts"],{

/***/ 750:
/*!*****************************************************************!*\
  !*** ./src/app/mostrar-ticket/mostrar-ticket-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarTicketPageRoutingModule": () => (/* binding */ MostrarTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _mostrar_ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-ticket.page */ 3982);




const routes = [
    {
        path: '',
        component: _mostrar_ticket_page__WEBPACK_IMPORTED_MODULE_0__.MostrarTicketPage
    }
];
let MostrarTicketPageRoutingModule = class MostrarTicketPageRoutingModule {
};
MostrarTicketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarTicketPageRoutingModule);



/***/ }),

/***/ 3937:
/*!*********************************************************!*\
  !*** ./src/app/mostrar-ticket/mostrar-ticket.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarTicketPageModule": () => (/* binding */ MostrarTicketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _mostrar_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-ticket-routing.module */ 750);
/* harmony import */ var _mostrar_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-ticket.page */ 3982);







let MostrarTicketPageModule = class MostrarTicketPageModule {
};
MostrarTicketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarTicketPageRoutingModule
        ],
        declarations: [_mostrar_ticket_page__WEBPACK_IMPORTED_MODULE_1__.MostrarTicketPage]
    })
], MostrarTicketPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-ticket_mostrar-ticket_module_ts.js.map