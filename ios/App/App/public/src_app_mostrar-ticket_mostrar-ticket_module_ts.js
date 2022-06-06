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



/***/ }),

/***/ 3982:
/*!*******************************************************!*\
  !*** ./src/app/mostrar-ticket/mostrar-ticket.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarTicketPage": () => (/* binding */ MostrarTicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mostrar_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mostrar-ticket.page.html */ 3307);
/* harmony import */ var _mostrar_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-ticket.page.scss */ 6981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _editar_ticket_editar_ticket_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editar-ticket/editar-ticket.page */ 3950);






let MostrarTicketPage = class MostrarTicketPage {
    constructor(loadingController, modalController) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.viewEntered = false;
    }
    ngOnInit() {
        console.log(this.ticket);
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.viewEntered = true;
                yield this.loadingController.dismiss();
            }), 800);
        });
    }
    ionViewWillLeave() {
        this.viewEntered = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    editar(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _editar_ticket_editar_ticket_page__WEBPACK_IMPORTED_MODULE_2__.EditarTicketPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
        });
    }
};
MostrarTicketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
MostrarTicketPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
MostrarTicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mostrar-ticket',
        template: _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mostrar_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mostrar_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarTicketPage);



/***/ }),

/***/ 3307:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/mostrar-ticket/mostrar-ticket.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ticket</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\n\n      <ion-card style=\"background-color: #f0f0f0; margin-top: 15px; margin-bottom: 10px;\">\n        <ion-card-subtitle class=\"ion-margin\">Status actual:</ion-card-subtitle>\n        <h2 style=\"color: cornflowerblue\" class=\"ion-margin\">{{ticket.estatus}}</h2>\n      </ion-card>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Sede: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sede}}</ion-label></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Área: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.area}}</ion-label></div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Categoría: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.categoria}}</ion-label></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Prioridad: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.prioridad}}</ion-label></div>\n    </ion-col>\n  </ion-row>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Tiempo en espera o Hold on: </ion-label>\n  </ion-item-divider>\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.espera}}</ion-label></div>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Sector: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sector}}</ion-label></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Nivel: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.nivel}}</ion-label></div>\n    </ion-col>\n  </ion-row>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Incidente: </ion-label>\n  </ion-item-divider>\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.incidente}}</ion-label></div>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Descripción: </ion-label>\n  </ion-item-divider>\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.descripcion}}</ion-label></div>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Fotos: </ion-label>\n  </ion-item-divider>\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of ticket.fotos\">\n      <ion-card style=\"background-color: #f0f0f0;\" >\n        <ion-img [src]=\"item.foto\"></ion-img>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Usuarios asignados: </ion-label>\n  </ion-item-divider>\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of ticket.asignacion\">\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" >\n        <ion-card-content>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"3.5\">\n                <ion-badge class=\"badge\">Nombre :</ion-badge>\n              </ion-col>\n              <ion-col size=\"8.5\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.nombre}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Bitácora: </ion-label>\n  </ion-item-divider>\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of ticket.bitacora\">\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" >\n        <ion-card-content>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"3\">\n                <ion-badge class=\"badge\">Acción :</ion-badge>\n              </ion-col>\n              <ion-col size=\"9\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.descripcion}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3.8\">\n                <ion-badge class=\"badge\">Fecha/Hora :</ion-badge>\n              </ion-col>\n              <ion-col size=\"8.2\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.fecha_reg}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4.2\">\n                <ion-badge class=\"badge\">Observaciones :</ion-badge>\n              </ion-col>\n              <ion-col size=\"7.8\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.observacion}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3.1\">\n                <ion-badge class=\"badge\">Usuario :</ion-badge>\n              </ion-col>\n              <ion-col size=\"8.9\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.nombre}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ 6981:
/*!*********************************************************!*\
  !*** ./src/app/mostrar-ticket/mostrar-ticket.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".margin {\n  margin-left: 21px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\nion-slides {\n  --bullet-background: rgb(59, 59, 59);\n  --bullet-background-active: black;\n}\n\n.badge {\n  background-color: #4c4c4a;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXItdGlja2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJtb3N0cmFyLXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJnYig1OSwgNTksIDU5KTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiBibGFjaztcclxufVxyXG5cclxuLmJhZGdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGM0YTtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-ticket_mostrar-ticket_module_ts.js.map