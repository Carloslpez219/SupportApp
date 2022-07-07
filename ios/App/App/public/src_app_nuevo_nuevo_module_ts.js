"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nuevo_nuevo_module_ts"],{

/***/ 5526:
/*!***********************************************!*\
  !*** ./src/app/nuevo/nuevo-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevoPageRoutingModule": () => (/* binding */ NuevoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _nuevo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuevo.page */ 6555);




const routes = [
    {
        path: '',
        component: _nuevo_page__WEBPACK_IMPORTED_MODULE_0__.NuevoPage
    }
];
let NuevoPageRoutingModule = class NuevoPageRoutingModule {
};
NuevoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NuevoPageRoutingModule);



/***/ }),

/***/ 494:
/*!***************************************!*\
  !*** ./src/app/nuevo/nuevo.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevoPageModule": () => (/* binding */ NuevoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _nuevo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuevo-routing.module */ 5526);
/* harmony import */ var _nuevo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevo.page */ 6555);







let NuevoPageModule = class NuevoPageModule {
};
NuevoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nuevo_routing_module__WEBPACK_IMPORTED_MODULE_0__.NuevoPageRoutingModule
        ],
        declarations: [_nuevo_page__WEBPACK_IMPORTED_MODULE_1__.NuevoPage]
    })
], NuevoPageModule);



/***/ }),

/***/ 6555:
/*!*************************************!*\
  !*** ./src/app/nuevo/nuevo.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevoPage": () => (/* binding */ NuevoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nuevo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./nuevo.page.html */ 5551);
/* harmony import */ var _nuevo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevo.page.scss */ 8250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);







let NuevoPage = class NuevoPage {
    constructor(navCtrl, bpmService, alertService, loadingController) {
        this.navCtrl = navCtrl;
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.descripcion = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.getSedes()).subscribe((resp) => {
                if (resp.status) {
                    this.sedes = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getCategorias()).subscribe((resp) => {
                if (resp.status) {
                    this.categorias = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getIncidentes()).subscribe((resp) => {
                if (resp.status) {
                    this.incidentes = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getPrioridades()).subscribe((resp) => {
                if (resp.status) {
                    this.prioridades = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getSectores()).subscribe((resp) => {
                if (resp.status) {
                    this.sectores = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            (yield this.bpmService.getAreas(this.sede)).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.areas = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
        });
    }
    back() {
        this.navCtrl.back({ animated: true });
    }
    selectCategoria(ev) {
        this.categoria = ev.detail.value;
    }
    selectArea(ev) {
        this.area = ev.detail.value;
    }
    selectIncidente(ev) {
        this.incidente = ev.detail.value;
    }
    selectSede(ev) {
        this.sede = ev.detail.value;
    }
    selectSector(ev) {
        this.sector = ev.detail.value;
    }
    selectPrioridad(ev) {
        this.prioridad = ev.detail.value;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    guardarTicket() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            (yield this.bpmService.guardarTicket(this.descripcion, this.incidente, this.prioridad, this.sede, this.sector, this.area))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.ticketCodigo = yield resp.data.ticket_codigo;
                    yield this.post();
                    yield this.alertService.presentToast('El ticket ha sigo generado con éxito.', 'success', 2500);
                    this.loadingController.dismiss();
                    this.navCtrl.back();
                }
                else {
                    this.alertService.presentAlert(resp.message);
                }
            }));
        });
    }
    onFileSelected(ev) {
        console.log(ev);
        this.selectedFile = ev.target.files[0];
    }
    post() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.post(this.ticketCodigo, 1, this.selectedFile, this.descripcion)).subscribe((resp) => {
                console.log(resp);
            });
        });
    }
};
NuevoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
NuevoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-nuevo',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nuevo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nuevo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NuevoPage);



/***/ }),

/***/ 4571:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);



let AlertService = class AlertService {
    constructor(alertCtrl, toastController) {
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
    }
    presentAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message,
                mode: 'md',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentToast(message, color, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                color
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 5551:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/nuevo/nuevo.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Nuevo Ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Categoría</ion-label>\r\n      <ion-select (ionChange)=\"selectCategoria($event)\">\r\n        <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{categoria.codigo}}\">{{categoria.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Área</ion-label>\r\n      <ion-select (ionChange)=\"selectArea($event)\">\r\n        <ion-select-option *ngFor=\"let area of areas\" value=\"{{area.codigo}}\">{{area.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Incidente</ion-label>\r\n      <ion-select (ionChange)=\"selectIncidente($event)\">\r\n        <ion-select-option *ngFor=\"let incidente of incidentes\" value=\"{{incidente.codigo}}\">{{incidente.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sede</ion-label>\r\n      <ion-select (ionChange)=\"selectSede($event)\">\r\n        <ion-select-option *ngFor=\"let sede of sedes\" value=\"{{sede.codigo}}\">{{sede.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sector</ion-label>\r\n      <ion-select (ionChange)=\"selectSector($event)\">\r\n        <ion-select-option *ngFor=\"let sector of sectores\" value=\"{{sector.codigo}}\">{{sector.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Prioridad</ion-label>\r\n      <ion-select (ionChange)=\"selectPrioridad($event)\">\r\n        <ion-select-option *ngFor=\"let prioridad of prioridades\" value=\"{{prioridad.codigo}}\">{{prioridad.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Descripción :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Descripción...\" [(ngModel)]=\"descripcion\">  </ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"2.7\"></ion-col>\r\n    <ion-col size=\"6.6\">\r\n      <div class=\"file-input\">\r\n        <input type=\"file\" id=\"file\" class=\"file\" (change)=\"onFileSelected($event)\">\r\n        <label for=\"file\">\r\n          Seleccionar archivo\r\n          <p class=\"file-name\"></p>\r\n        </label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"2.7\"></ion-col>\r\n  </ion-row>\r\n  \r\n  <br>\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"guardarTicket()\">Grabar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8250:
/*!***************************************!*\
  !*** ./src/app/nuevo/nuevo.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.file {\n  opacity: 0;\n  width: 0.1px;\n  height: 0.1px;\n  position: absolute;\n}\n\n.file-input label {\n  display: block;\n  position: relative;\n  width: 200px;\n  height: 50px;\n  border-radius: 25px;\n  background: linear-gradient(40deg, #4c4c4a, #000000);\n  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-out;\n}\n\n.file-name {\n  position: absolute;\n  bottom: -35px;\n  left: 10px;\n  font-size: 0.85rem;\n  color: #555;\n}\n\ninput:hover + label,\ninput:focus + label {\n  transform: scale(1.02);\n}\n\n/* Adding an outline to the label on focus */\n\ninput:focus + label {\n  outline: 1px solid #000;\n  outline: -webkit-focus-ring-color auto 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51ZXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTs7RUFFRSxzQkFBQTtBQUNKOztBQUVFLDRDQUFBOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSwwQ0FBQTtBQUNKIiwiZmlsZSI6Im51ZXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjY2MTVCO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZmlsZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgaGVpZ2h0OiAwLjFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGUtaW5wdXQgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCM0YzRjNGEsIzAwMDAwMCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuZmlsZS1uYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTM1cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmhvdmVyICsgbGFiZWwsXHJcbiAgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGRpbmcgYW4gb3V0bGluZSB0byB0aGUgbGFiZWwgb24gZm9jdXMgKi9cclxuICBpbnB1dDpmb2N1cyArIGxhYmVsIHtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMnB4O1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_nuevo_nuevo_module_ts.js.map