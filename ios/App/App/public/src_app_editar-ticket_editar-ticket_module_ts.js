"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_editar-ticket_editar-ticket_module_ts"],{

/***/ 8604:
/*!***************************************************************!*\
  !*** ./src/app/editar-ticket/editar-ticket-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarTicketPageRoutingModule": () => (/* binding */ EditarTicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _editar_ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-ticket.page */ 3950);




const routes = [
    {
        path: '',
        component: _editar_ticket_page__WEBPACK_IMPORTED_MODULE_0__.EditarTicketPage
    }
];
let EditarTicketPageRoutingModule = class EditarTicketPageRoutingModule {
};
EditarTicketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarTicketPageRoutingModule);



/***/ }),

/***/ 9624:
/*!*******************************************************!*\
  !*** ./src/app/editar-ticket/editar-ticket.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarTicketPageModule": () => (/* binding */ EditarTicketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _editar_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-ticket-routing.module */ 8604);
/* harmony import */ var _editar_ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-ticket.page */ 3950);







let EditarTicketPageModule = class EditarTicketPageModule {
};
EditarTicketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editar_ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarTicketPageRoutingModule
        ],
        declarations: [_editar_ticket_page__WEBPACK_IMPORTED_MODULE_1__.EditarTicketPage]
    })
], EditarTicketPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_editar-ticket_editar-ticket_module_ts.js.map