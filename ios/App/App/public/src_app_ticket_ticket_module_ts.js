"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ticket_ticket_module_ts"],{

/***/ 7446:
/*!*************************************************!*\
  !*** ./src/app/ticket/ticket-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPageRoutingModule": () => (/* binding */ TicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.page */ 6412);




const routes = [
    {
        path: '',
        component: _ticket_page__WEBPACK_IMPORTED_MODULE_0__.TicketPage
    }
];
let TicketPageRoutingModule = class TicketPageRoutingModule {
};
TicketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TicketPageRoutingModule);



/***/ }),

/***/ 8415:
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPageModule": () => (/* binding */ TicketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-routing.module */ 7446);
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.page */ 6412);







let TicketPageModule = class TicketPageModule {
};
TicketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketPageRoutingModule
        ],
        declarations: [_ticket_page__WEBPACK_IMPORTED_MODULE_1__.TicketPage]
    })
], TicketPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_ticket_ticket_module_ts.js.map