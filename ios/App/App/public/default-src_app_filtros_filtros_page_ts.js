"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_filtros_filtros_page_ts"],{

/***/ 3061:
/*!*****************************************!*\
  !*** ./src/app/filtros/filtros.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltrosPage": () => (/* binding */ FiltrosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_filtros_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./filtros.page.html */ 9161);
/* harmony import */ var _filtros_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtros.page.scss */ 9146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let FiltrosPage = class FiltrosPage {
    constructor(bpmService, alertService, loadingController, modalController) {
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.viewEntered = false;
        //
        this.estdo = '';
        this.categoria = '';
        this.prioridad = '';
        this.incidente = '';
        this.desde = this.getFirstDay();
        this.hasta = this.getDate();
    }
    getFirstDay() {
        let todayDate;
        const today = new Date();
        const yyyy = today.getFullYear();
        todayDate = '01/01/' + yyyy;
        return todayDate;
    }
    getDate() {
        let todayDate;
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        todayDate = dd + '/' + mm + '/' + yyyy;
        return todayDate;
    }
    cambioFecha(event) {
        const cadena = event.detail.value.substr(0, 10).split('-');
        this.desde = cadena[2] + '/' + cadena[1] + '/' + cadena[0];
    }
    cambioFecha2(event) {
        const cadena = event.detail.value.substr(0, 10).split('-');
        this.hasta = cadena[2] + '/' + cadena[1] + '/' + cadena[0];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.getStatus('')).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.status = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getCategorias()).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.categorias = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getIncidentes(this.categoria)).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.incidentes = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getPrioridades()).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.prioridades = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
        });
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
    selectCategoria(ev) {
        this.categoria = ev.detail.value;
    }
    selectIncidente(ev) {
        this.incidente = ev.detail.value;
    }
    selectStatus(ev) {
        this.estdo = ev.detail.value;
    }
    selectPrioridad(ev) {
        this.prioridad = ev.detail.value;
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    aceptar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const filtros = {
                estado: yield this.estdo,
                categoria: yield this.categoria,
                prioridad: yield this.prioridad,
                incidente: yield this.incidente,
                desde: yield this.desde,
                hasta: yield this.hasta
            };
            this.modalController.dismiss(filtros);
        });
    }
};
FiltrosPage.ctorParameters = () => [
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
FiltrosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-filtros',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_filtros_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_filtros_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FiltrosPage);



/***/ }),

/***/ 9161:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/filtros/filtros.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Filtros</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n\r\n  <br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Categoría</ion-label>\r\n      <ion-select (ionChange)=\"selectCategoria($event)\">\r\n        <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{categoria.codigo}}\">{{categoria.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Prioridad</ion-label>\r\n      <ion-select (ionChange)=\"selectPrioridad($event)\">\r\n        <ion-select-option *ngFor=\"let prioridad of prioridades\" value=\"{{prioridad.codigo}}\">{{prioridad.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Incidente</ion-label>\r\n      <ion-select (ionChange)=\"selectIncidente($event)\">\r\n        <ion-select-option *ngFor=\"let incidente of incidentes\" value=\"{{incidente.codigo}}\">{{incidente.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Status</ion-label>\r\n      <ion-select (ionChange)=\"selectStatus($event)\">\r\n        <ion-select-option *ngFor=\"let sede of status\" value=\"{{sede.codigo}}\">{{sede.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\r\n          <ion-label>{{desde}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-button id=\"trigger-button\" expand=\"block\" >\r\n          Desde\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\r\n          <ion-label>{{hasta}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-button id=\"trigger-button2\" expand=\"block\" >\r\n          Hasta\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <br>\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"aceptar()\">Aceptar\r\n                  <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"3\"></ion-col>\r\n    </ion-row>\r\n  </ion-list>\r\n\r\n  <ion-modal [isOpen]=\"false\" [breakpoints]=\"[0.1, 0.7, 1]\" [initialBreakpoint]=\"0.7\" trigger=\"trigger-button\">\r\n    <ng-template>\r\n      <ion-header translucent>\r\n        <ion-toolbar>\r\n          <ion-title>Fecha</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-card>\r\n          <ion-datetime min=\"2020-01-01\" (ionChange)=\"cambioFecha($event)\" presentation=\"date\"></ion-datetime>\r\n        </ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"dismissModal()\">\r\n              Aceptar\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"3\"></ion-col>\r\n        </ion-row>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n<ion-modal [isOpen]=\"false\" [breakpoints]=\"[0.1, 0.7, 1]\" [initialBreakpoint]=\"0.7\" trigger=\"trigger-button2\">\r\n  <ng-template>\r\n    <ion-header translucent>\r\n      <ion-toolbar>\r\n        <ion-title>Fecha</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-card>\r\n        <ion-datetime min=\"2020-01-01\" (ionChange)=\"cambioFecha2($event)\" presentation=\"date\"></ion-datetime>\r\n      </ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"3\"></ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"dismissModal()\">\r\n            Aceptar\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"3\"></ion-col>\r\n      </ion-row>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 9146:
/*!*******************************************!*\
  !*** ./src/app/filtros/filtros.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRyb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiZmlsdHJvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_filtros_filtros_page_ts.js.map