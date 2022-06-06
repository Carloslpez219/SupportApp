"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_ticket_ticket_page_ts"],{

/***/ 6412:
/*!***************************************!*\
  !*** ./src/app/ticket/ticket.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPage": () => (/* binding */ TicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ticket.page.html */ 5513);
/* harmony import */ var _ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.page.scss */ 6535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _editar_ticket_editar_ticket_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editar-ticket/editar-ticket.page */ 3950);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);








let TicketPage = class TicketPage {
    constructor(loadingController, modalController, sanitizer, alertService) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.alertService = alertService;
        this.viewEntered = false;
    }
    ngOnInit() {
        console.log(this.ticket);
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.viewEntered = yield true;
                yield this.loadingController.dismiss();
            }), 800);
        });
    }
    ionViewWillLeave() {
        this.viewEntered = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    editar(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const modal = yield this.modalController.create({
                component: _editar_ticket_editar_ticket_page__WEBPACK_IMPORTED_MODULE_2__.EditarTicketPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            if (value.data) {
                this.viewEntered = yield false;
                this.ticket = yield value.data;
                setTimeout(() => {
                    this.viewEntered = true;
                    this.loadingController.dismiss();
                }, 800);
            }
            else {
                this.loadingController.dismiss();
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    verpdf(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(url);
            if (url !== '' && url !== undefined) {
                const safeUrl = yield this.sanitizer.bypassSecurityTrustResourceUrl(url);
                yield window.open(safeUrl.changingThisBreaksApplicationSecurity, '_system');
            }
            else {
                this.alertService.presentAlert('No hay archivo disponible.');
            }
        });
    }
};
TicketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
TicketPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
TicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ticket',
        template: _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketPage);



/***/ }),

/***/ 5513:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ticket/ticket.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ticket</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\n\n  \n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card style=\"background-color: #f0f0f0; margin-top: 15px; margin-bottom: 10px; height: 80%;\">\n        <ion-card-subtitle class=\"ion-margin\">Status actual:</ion-card-subtitle>\n        <h2 style=\"color: cornflowerblue\" class=\"ion-margin\">{{ticket.estatus}}</h2>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" style=\"--background: #2D383F; margin-top: 35px;\" (click)=\"editar(ticket)\"><b>Editar</b></ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Sede: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sede}}</ion-label></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Área: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.area}}</ion-label></div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Categoría: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.categoria}}</ion-label></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Prioridad: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.prioridad}}</ion-label></div>\n    </ion-col>\n  </ion-row>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Tiempo en espera o Hold on: </ion-label>\n  </ion-item-divider>\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.espera}}</ion-label></div>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Sector: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sector}}</ion-label></div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item-divider style=\"background-color: #f0f0f0;\">\n        <ion-label>Nivel: </ion-label>\n      </ion-item-divider>\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.nivel}}</ion-label></div>\n    </ion-col>\n  </ion-row>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Incidente: </ion-label>\n  </ion-item-divider>\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.incidente}}</ion-label></div>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Descripción: </ion-label>\n  </ion-item-divider>\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.descripcion}}</ion-label></div>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Fotos: </ion-label>\n  </ion-item-divider>\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of ticket.fotos\">\n      <ion-card style=\"background-color: #f0f0f0;\" (click)=\"verpdf(item.foto)\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-badge class=\"badge\">Fecha: </ion-badge>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-label>{{item.fecha_reg}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Usuarios asignados: </ion-label>\n  </ion-item-divider>\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of ticket.asignacion\">\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" >\n        <ion-card-content>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"3.5\">\n                <ion-badge class=\"badge\">Nombre :</ion-badge>\n              </ion-col>\n              <ion-col size=\"8.5\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.nombre}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\n    <ion-label>Bitácora: </ion-label>\n  </ion-item-divider>\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let item of ticket.bitacora\">\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" >\n        <ion-card-content>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"3\">\n                <ion-badge class=\"badge\">Acción :</ion-badge>\n              </ion-col>\n              <ion-col size=\"9\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.descripcion}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3.8\">\n                <ion-badge class=\"badge\">Fecha/Hora :</ion-badge>\n              </ion-col>\n              <ion-col size=\"8.2\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.fecha_reg}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4.2\">\n                <ion-badge class=\"badge\">Observaciones :</ion-badge>\n              </ion-col>\n              <ion-col size=\"7.8\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.observacion}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3.1\">\n                <ion-badge class=\"badge\">Usuario :</ion-badge>\n              </ion-col>\n              <ion-col size=\"8.9\">\n                <ion-text>\n                  <h3 class=\"descripcion\">{{item.nombre}}</h3>\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ 6535:
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = ".margin {\n  margin-left: 21px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\nion-slides {\n  --bullet-background: rgb(59, 59, 59);\n  --bullet-background-active: black;\n}\n\n.badge {\n  background-color: #4c4c4a;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoidGlja2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVze1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDU5LCA1OSwgNTkpO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGJsYWNrO1xyXG59XHJcblxyXG4uYmFkZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM0YzRhO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjY2MTVCO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_ticket_ticket_page_ts.js.map