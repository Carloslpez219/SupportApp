"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_alert_service_ts-src_app_token_token_module_ts"],{

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

/***/ 3384:
/*!***********************************************!*\
  !*** ./src/app/token/token-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenPageRoutingModule": () => (/* binding */ TokenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _token_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.page */ 866);




const routes = [
    {
        path: '',
        component: _token_page__WEBPACK_IMPORTED_MODULE_0__.TokenPage
    }
];
let TokenPageRoutingModule = class TokenPageRoutingModule {
};
TokenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TokenPageRoutingModule);



/***/ }),

/***/ 927:
/*!***************************************!*\
  !*** ./src/app/token/token.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenPageModule": () => (/* binding */ TokenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _token_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-routing.module */ 3384);
/* harmony import */ var _token_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.page */ 866);







let TokenPageModule = class TokenPageModule {
};
TokenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _token_routing_module__WEBPACK_IMPORTED_MODULE_0__.TokenPageRoutingModule
        ],
        declarations: [_token_page__WEBPACK_IMPORTED_MODULE_1__.TokenPage]
    })
], TokenPageModule);



/***/ }),

/***/ 866:
/*!*************************************!*\
  !*** ./src/app/token/token.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenPage": () => (/* binding */ TokenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_token_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./token.page.html */ 2839);
/* harmony import */ var _token_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.page.scss */ 931);
/* harmony import */ var _uid_uid_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../uid/uid.page */ 6683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);






let TokenPage = class TokenPage {
    constructor(navCtrl, modalController, loadingController) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back({ animated: true });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    uid() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const modal = yield this.modalController.create({
                component: _uid_uid_page__WEBPACK_IMPORTED_MODULE_2__.UidPage,
                backdropDismiss: false
            });
            yield modal.present();
        });
    }
};
TokenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
TokenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-token',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_token_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_token_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TokenPage);



/***/ }),

/***/ 2839:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/token/token.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Generar token</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<br>\n<br>\n  <ion-list>\n    <ion-list-header> Token: </ion-list-header>\n    <br>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"code-working\"></ion-icon>\n      <ion-label>Actualmente no tienes un token.</ion-label>\n    </ion-item>\n  </ion-list>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n  <ion-row>\n    <ion-col size=\"3.5\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button  style=\"--background: #c54f4d;\" class=\"upload-btn\" (click)=\"uid()\">\n              Obtener UUID\n               <ion-icon slot=\"end\" name=\"arrow-down\" ></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\"></ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ 931:
/*!***************************************!*\
  !*** ./src/app/token/token.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_services_alert_service_ts-src_app_token_token_module_ts.js.map