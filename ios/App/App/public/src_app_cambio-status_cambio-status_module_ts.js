"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cambio-status_cambio-status_module_ts"],{

/***/ 7547:
/*!***************************************************************!*\
  !*** ./src/app/cambio-status/cambio-status-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambioStatusPageRoutingModule": () => (/* binding */ CambioStatusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _cambio_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambio-status.page */ 2877);




const routes = [
    {
        path: '',
        component: _cambio_status_page__WEBPACK_IMPORTED_MODULE_0__.CambioStatusPage
    }
];
let CambioStatusPageRoutingModule = class CambioStatusPageRoutingModule {
};
CambioStatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CambioStatusPageRoutingModule);



/***/ }),

/***/ 7533:
/*!*******************************************************!*\
  !*** ./src/app/cambio-status/cambio-status.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambioStatusPageModule": () => (/* binding */ CambioStatusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _cambio_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambio-status-routing.module */ 7547);
/* harmony import */ var _cambio_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cambio-status.page */ 2877);







let CambioStatusPageModule = class CambioStatusPageModule {
};
CambioStatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cambio_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.CambioStatusPageRoutingModule
        ],
        declarations: [_cambio_status_page__WEBPACK_IMPORTED_MODULE_1__.CambioStatusPage]
    })
], CambioStatusPageModule);



/***/ }),

/***/ 2877:
/*!*****************************************************!*\
  !*** ./src/app/cambio-status/cambio-status.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambioStatusPage": () => (/* binding */ CambioStatusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cambio_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cambio-status.page.html */ 9733);
/* harmony import */ var _cambio_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cambio-status.page.scss */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let CambioStatusPage = class CambioStatusPage {
    constructor(bpmService, alertService, loadingController, modalController) {
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.viewEntered = false;
        this.descripcion = '';
        this.estadoActual = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.ticket);
            (yield this.bpmService.getStatus(this.ticket.codigo)).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.status = yield resp.data;
                    this.estadoActual = yield this.ticket.estatus_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.viewEntered = true;
            yield this.loadingController.dismiss();
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
    selectCategoria(ev) {
        this.estado = ev.detail.value;
    }
    cambiosStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.cambiarStatus(this.descripcion, this.ticket.codigo, this.estado))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    yield (yield this.bpmService.getTicket(resp.data.ticket_codigo)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        this.ticketNuevo = yield res.data;
                        yield this.alertService.presentToast('El ticket se ha actualizado correctamente', 'success', 2500);
                        this.presentLoading();
                        yield this.modalController.dismiss(this.ticketNuevo);
                    }));
                }
                else {
                    this.alertService.presentAlert(resp.message);
                }
            }));
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
};
CambioStatusPage.ctorParameters = () => [
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
CambioStatusPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
CambioStatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cambio-status',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cambio_status_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cambio_status_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CambioStatusPage);



/***/ }),

/***/ 9733:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/cambio-status/cambio-status.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Cambio de status</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n<br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Status</ion-label>\r\n      <ion-select (ionChange)=\"selectCategoria($event)\" [value]=\"estadoActual\">\r\n        <ion-select-option *ngFor=\"let estado of status\" value=\"{{estado.codigo}}\">{{estado.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Comentario :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Comentario...\" [(ngModel)]=\"descripcion\">  </ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n<br>\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"cambiosStatus()\">Guardar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 7177:
/*!*******************************************************!*\
  !*** ./src/app/cambio-status/cambio-status.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWJpby1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2FtYmlvLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_cambio-status_cambio-status_module_ts.js.map