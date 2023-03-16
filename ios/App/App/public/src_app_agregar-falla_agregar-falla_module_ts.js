"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_agregar-falla_agregar-falla_module_ts"],{

/***/ 9115:
/*!***************************************************************!*\
  !*** ./src/app/agregar-falla/agregar-falla-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarFallaPageRoutingModule": () => (/* binding */ AgregarFallaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _agregar_falla_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-falla.page */ 8710);




const routes = [
    {
        path: '',
        component: _agregar_falla_page__WEBPACK_IMPORTED_MODULE_0__.AgregarFallaPage
    }
];
let AgregarFallaPageRoutingModule = class AgregarFallaPageRoutingModule {
};
AgregarFallaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarFallaPageRoutingModule);



/***/ }),

/***/ 3348:
/*!*******************************************************!*\
  !*** ./src/app/agregar-falla/agregar-falla.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarFallaPageModule": () => (/* binding */ AgregarFallaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _agregar_falla_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-falla-routing.module */ 9115);
/* harmony import */ var _agregar_falla_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-falla.page */ 8710);







let AgregarFallaPageModule = class AgregarFallaPageModule {
};
AgregarFallaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_falla_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarFallaPageRoutingModule
        ],
        declarations: [_agregar_falla_page__WEBPACK_IMPORTED_MODULE_1__.AgregarFallaPage]
    })
], AgregarFallaPageModule);



/***/ }),

/***/ 8710:
/*!*****************************************************!*\
  !*** ./src/app/agregar-falla/agregar-falla.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarFallaPage": () => (/* binding */ AgregarFallaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_falla_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agregar-falla.page.html */ 9830);
/* harmony import */ var _agregar_falla_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-falla.page.scss */ 1201);
/* harmony import */ var _sercheble_select_sercheble_select_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sercheble-select/sercheble-select.page */ 4252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);








let AgregarFallaPage = class AgregarFallaPage {
    constructor(bpmService, alertService, loadingController, modalController) {
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.viewEntered = false;
        this.descripcion = '';
        this.falla = '';
        this.hasta = this.getDate();
        this.situacion = 1;
        this.activofound = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.getActivos()).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.activos = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
            this.hoy = this.anio + '-' + this.mes + '-' + this.dia + 'T23:59:59';
            console.log(this.hoy);
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.viewEntered = true;
            yield this.loadingController.dismiss();
        });
    }
    ionViewWillLeave() {
        this.viewEntered = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    selectCategoria() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const data = this.activos;
            const modal = yield this.modalController.create({
                component: _sercheble_select_sercheble_select_page__WEBPACK_IMPORTED_MODULE_2__.SerchebleSelectPage,
                backdropDismiss: false,
                componentProps: { data }
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            if (value.data) {
                console.log(value);
                this.activo = value.data;
                this.activos.forEach(element => {
                    if (element.codigo === this.activo) {
                        this.activofound = element.nombre;
                    }
                });
            }
        });
    }
    cambioFechaHasta(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.hasta = yield event.detail.value.split('T');
            this.hora = yield this.hasta[1];
            this.hasta = yield this.hasta[0].replace('-', '/');
            this.hora = yield this.hora.split('-');
            this.hora = yield this.hora[0];
        });
    }
    getDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth()).padStart(2, '0');
        const yyyy = today.getFullYear();
        this.dia = String(today.getDate()).padStart(2, '0');
        this.mes = String(today.getMonth() + 1).padStart(2, '0');
        this.anio = today.getFullYear();
        this.maxDate = new Date(yyyy, parseInt(mm, 10), parseInt(dd, 10));
        const hoy = this.maxDate;
        return hoy;
    }
    agregarFalla() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.agregarFalla(this.ticket.codigo, this.activo, this.falla, this.situacion, this.hasta, this.hora, this.descripcion))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    yield (yield this.bpmService.getTicket(this.ticket.codigo)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.ticketNuevo = yield res.data;
                        this.alertService.presentToast('Falla agregada correctamente', 'success', 2500);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
};
AgregarFallaPage.ctorParameters = () => [
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_3__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AgregarFallaPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AgregarFallaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-agregar-falla',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_falla_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agregar_falla_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgregarFallaPage);



/***/ }),

/***/ 4252:
/*!***********************************************************!*\
  !*** ./src/app/sercheble-select/sercheble-select.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerchebleSelectPage": () => (/* binding */ SerchebleSelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sercheble_select_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sercheble-select.page.html */ 2922);
/* harmony import */ var _sercheble_select_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sercheble-select.page.scss */ 8406);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





let SerchebleSelectPage = class SerchebleSelectPage {
    constructor(loadingController, modalController) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.viewEntered = false;
        this.itemTextField = '';
        this.filtered = [];
    }
    ngOnInit() {
        this.filtered = this.data;
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                this.viewEntered = yield true;
                yield this.loadingController.dismiss();
            }), 800);
        });
    }
    ionViewWillLeave() {
        this.viewEntered = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    onSearchChange(event) {
        const filter = event.detail.value.toLocaleLowerCase();
        this.filtered = this.data.filter(item => item.nombre.toLowerCase().indexOf(filter) >= 0);
    }
    check(ev) {
        this.modalController.dismiss(ev.detail.value);
    }
};
SerchebleSelectPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
SerchebleSelectPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SerchebleSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sercheble-select',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sercheble_select_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sercheble_select_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SerchebleSelectPage);



/***/ }),

/***/ 9830:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/agregar-falla/agregar-falla.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Agregar falla</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n<br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Activo</ion-label>\r\n      {{activofound}}\r\n      <ion-button (click)=\"selectCategoria()\"  fill=\"clear\" style=\"color: darkgray; zoom: 0.6; margin-right: -5px;\">\r\n        <ion-icon name=\"caret-down\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Falla :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Falla...\" [(ngModel)]=\"falla\">  </ion-textarea>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Comentario :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Comentario...\" [(ngModel)]=\"descripcion\">  </ion-textarea>\r\n    </ion-item>\r\n    <br>\r\n    <ion-label class=\"ion-padding\">Fecha y Hora en la que ocurre la falla:</ion-label>\r\n    <ion-datetime [value]=\"maxDate.toISOString()\" [max]=\"hoy\" (ionChange)=\"cambioFechaHasta($event)\" style=\"margin-left: 20px;\r\n    border-radius: 20px; margin-top: 10px;\"></ion-datetime>\r\n  </ion-list>\r\n<br>\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"agregarFalla()\">Guardar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 2922:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/sercheble-select/sercheble-select.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Selección</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\n\n\n  <ion-searchbar (ionChange)=\"onSearchChange($event)\" animated=\"true\"  show-clear-button=\"focus\" placeholder=\"Filtrar\"></ion-searchbar>\n\n<br>\n\n  <ion-item *ngFor=\"let item of filtered\">\n    <ion-label>{{item.nombre}}</ion-label>\n    <ion-checkbox slot=\"end\" (ionChange)=\"check($event)\" value=\"{{item.codigo}}\"></ion-checkbox>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ 1201:
/*!*******************************************************!*\
  !*** ./src/app/agregar-falla/agregar-falla.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItZmFsbGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYWdyZWdhci1mYWxsYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 8406:
/*!*************************************************************!*\
  !*** ./src/app/sercheble-select/sercheble-select.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcmNoZWJsZS1zZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic2VyY2hlYmxlLXNlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjY2MTVCO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_agregar-falla_agregar-falla_module_ts.js.map