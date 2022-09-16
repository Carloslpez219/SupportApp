"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_observaciones_observaciones_module_ts"],{

/***/ 8438:
/*!***************************************************************!*\
  !*** ./src/app/observaciones/observaciones-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservacionesPageRoutingModule": () => (/* binding */ ObservacionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _observaciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observaciones.page */ 3519);




const routes = [
    {
        path: '',
        component: _observaciones_page__WEBPACK_IMPORTED_MODULE_0__.ObservacionesPage
    }
];
let ObservacionesPageRoutingModule = class ObservacionesPageRoutingModule {
};
ObservacionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ObservacionesPageRoutingModule);



/***/ }),

/***/ 8297:
/*!*******************************************************!*\
  !*** ./src/app/observaciones/observaciones.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservacionesPageModule": () => (/* binding */ ObservacionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _observaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observaciones-routing.module */ 8438);
/* harmony import */ var _observaciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observaciones.page */ 3519);







let ObservacionesPageModule = class ObservacionesPageModule {
};
ObservacionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _observaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.ObservacionesPageRoutingModule
        ],
        declarations: [_observaciones_page__WEBPACK_IMPORTED_MODULE_1__.ObservacionesPage]
    })
], ObservacionesPageModule);



/***/ }),

/***/ 3519:
/*!*****************************************************!*\
  !*** ./src/app/observaciones/observaciones.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservacionesPage": () => (/* binding */ ObservacionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observaciones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./observaciones.page.html */ 9111);
/* harmony import */ var _observaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observaciones.page.scss */ 959);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/alert.service */ 4571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bpm.service */ 2152);







let ObservacionesPage = class ObservacionesPage {
    constructor(modalController, bpmService, alertService) {
        this.modalController = modalController;
        this.bpmService = bpmService;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.viewEntered = true;
    }
    ionViewWillLeave() {
        this.viewEntered = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    method() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.paso.checked) {
                this.ejecucion = 1;
            }
            else {
                this.ejecucion = 0;
            }
            (yield this.bpmService.ejecutarPaso(this.ticket.codigo, this.paso.paso_codigo, this.paso.tipo_incidente, this.ejecucion, this.paso.observaciones)).subscribe(resp => {
                console.log(resp);
                this.alertService.presentToast('Comentario agregado satisfactoriamente', 'success', 2000);
                this.modalController.dismiss();
            });
        });
    }
};
ObservacionesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_3__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
ObservacionesPage.propDecorators = {
    paso: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ObservacionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-observaciones',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observaciones_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ObservacionesPage);



/***/ }),

/***/ 9111:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/observaciones/observaciones.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Observaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\n  <br>\n  <br>\n  <br>\n\n  <ion-label class=\"ion-padding\">Comentario: </ion-label>\n  <br>\n  <br>\n\n    <ion-item mode=\"md\">\n      <ion-textarea rows=\"10\" placeholder=\"Observaciones...\" clearOnEdit=\"true\" clearInput [(ngModel)]=\"paso.observaciones\"></ion-textarea>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n\n  <ion-grid>\n    <br>\n    <ion-row>\n      <ion-col size=\"3\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" class=\"button-save\" (click)=\"method()\"\n          strong=\"true\">Aceptar\n          <ion-icon slot=\"start\" color=\"white\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 959:
/*!*******************************************************!*\
  !*** ./src/app/observaciones/observaciones.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #f0f0f0;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.check {\n  display: block;\n  width: 60%;\n  margin: auto;\n}\n\nion-item {\n  --border-color: transparent !important;\n  --background: #ececec;\n  border-radius: 14px;\n  margin-left: 4%;\n  margin-right: 4%;\n}\n\nion-list {\n  background-color: #FFF;\n}\n\n.button-save {\n  --background: #4c4c4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmFjaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Im9ic2VydmFjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjY2MTVCO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hlY2t7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5idXR0b24tc2F2ZXtcclxuICAtLWJhY2tncm91bmQ6ICM0YzRjNGE7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_observaciones_observaciones_module_ts.js.map