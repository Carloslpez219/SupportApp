"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_perfil_perfil_module_ts"],{

/***/ 559:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 3201:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 559);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1482)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 3590:
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 1899);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 725:
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 3590);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 1899);








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 1899:
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./perfil.page.html */ 7988);
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss */ 6655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 7897);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 7524);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 3201);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3981);











let PerfilPage = class PerfilPage {
    constructor(userService, alertService, http, navCtrl, loadingController, storage) {
        this.userService = userService;
        this.alertService = alertService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.storage = storage;
        this.mostrarData = false;
        this.items = Array(3);
        this.myImage = null;
        // eslint-disable-next-line max-len
        this.pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.profileForm = this.createFormGroup();
    }
    get nombre() { return this.profileForm.get('nombre'); }
    get mail() { return this.profileForm.get('mail'); }
    get telefono() { return this.profileForm.get('telefono'); }
    get dpi() { return this.profileForm.get('dpi'); }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.getData();
            this.datosUsuario = yield this.storage.get('datos');
        });
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.pattern)]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            dpi: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
        });
    }
    defaultValue(perfilData) {
        this.profileForm.controls.nombre.setValue(perfilData.nombre);
        this.profileForm.controls.mail.setValue(perfilData.mail);
        this.profileForm.controls.telefono.setValue(perfilData.telefono);
        this.profileForm.controls.dpi.setValue(perfilData.dpi);
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.userService.getPerfil()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.status) {
                    this.perfilData = resp.data;
                    this.defaultValue(this.perfilData);
                    this.urlFoto = yield this.datosUsuario.url_foto;
                    this.mostrarData = true;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde.');
                }
            }));
        });
    }
    clean() {
        this.profileForm.reset();
    }
    editProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            yield (yield this.userService.editProfile(this.profileForm.value.nombre, this.profileForm.value.mail, this.profileForm.value.telefono, this.profileForm.value.dpi)).
                subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.status) {
                    this.mostrarData = false;
                    this.alertService.presentToast('Registro actualizado!', 'success', 3000);
                    this.getData();
                    yield this.loadingController.dismiss();
                }
                else {
                    this.alertService.presentToast('Ha ocurrido un error, intenta más tarde', 'danger', 3000);
                    yield this.loadingController.dismiss();
                }
            }));
        });
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
                quality: 70,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
                promptLabelHeader: 'Seleccionar método',
                promptLabelPhoto: 'Galería',
                promptLabelPicture: 'Tomar fotografía',
                presentationStyle: 'popover'
            });
            const imageUrl = (yield 'data:image/jpeg;base64,') + image.base64String;
            this.photo = yield imageUrl;
            this.selectedFile = yield this.dataURLtoFile(imageUrl, 'image');
            this.datosUsuario = yield this.storage.get('datos');
            yield this.post();
        });
    }
    post() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedFile) {
                console.log(this.selectedFile);
                const formData = new FormData();
                formData.append('imagen', this.selectedFile);
                // eslint-disable-next-line max-len
                const upload$ = this.http.post(`https://gt.disatel.app/ROOT/API/upload_foto_perfil.html&usuario=${this.datosUsuario.codigo}`, formData);
                upload$.subscribe(resp => {
                    console.log(resp);
                });
            }
        });
    }
    dataURLtoFile(dataurl, filename) {
        // eslint-disable-next-line one-var
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    back() {
        this.navCtrl.back({ animated: true });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-perfil',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



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

/***/ 7988:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/perfil/perfil.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"!mostrarData\">\r\n    <ion-card-header>\r\n      <ion-skeleton-text animated class=\"skeleton-img\"></ion-skeleton-text>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-skeleton-text animated class=\"avatar\"></ion-skeleton-text>\r\n      <ion-skeleton-text animated class=\"container-skeleton\" style=\"width: 60%\"></ion-skeleton-text>\r\n      <br>\r\n      <div *ngFor=\"let item of items\" class=\"margin-bottom\">\r\n        <ion-skeleton-text animated style=\"width: 15%\" class=\"margin\"></ion-skeleton-text>\r\n        <ion-skeleton-text animated style=\"width: 90%\" class=\"item-skeleton\"></ion-skeleton-text>\r\n      </div>\r\n      <br>\r\n      <ion-grid class=\"margin-top-menos\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-skeleton-text animated style=\"width: 90%\" class=\"button-skeleton\"></ion-skeleton-text>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-skeleton-text animated style=\"width: 90%\" class=\"button-skeleton\"></ion-skeleton-text>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <br>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card *ngIf=\"mostrarData\" class=\"animated-card animate__animated animate__fadeIn\">\r\n    <ion-card-header>\r\n      <ion-img src=\"../../assets/img/bg-contact.jpg\" style=\"border-radius: 10px;\" class=\"img  animate__animated animate__fadeIn\"></ion-img>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-avatar class=\"avatar\">\r\n              <img [src]=\"urlFoto\">\r\n            </ion-avatar>\r\n            <ion-button expand=\"block\" fill=\"clear\" shape=\"round\" style=\"margin-top: 0px;\" (click)=\"takePicture()\">\r\n              Cambiar foto\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-card-title class=\"container\">{{perfilData?.nombre}}</ion-card-title>\r\n      <form (ngSubmit)=\"editProfile()\" [formGroup]=\"profileForm\">\r\n        <ion-list>\r\n          <small>Nombre:*</small>\r\n          <ion-item mode=\"md\">\r\n            <ion-icon slot=\"start\" name=\"person-circle-outline\"></ion-icon>\r\n            <ion-input placeholder=\"User\" type=\"name\" clearOnEdit=\"true\" clearInput formControlName=\"nombre\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div class=\"errors\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\r\n            <span *ngIf=\"nombre.errors.required\">\r\n              <ion-label class=\"error-container\">Este campo es requerido</ion-label>\r\n            </span>\r\n          </div>\r\n          <small>E-mail:*</small>\r\n          <ion-item mode=\"md\">\r\n            <ion-icon slot=\"start\" name=\"mail-open-outline\"></ion-icon>\r\n            <ion-input placeholder=\"Mail\" type=\"name\" clearOnEdit=\"true\" clearInput formControlName=\"mail\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div class=\"errors\" *ngIf=\"mail.invalid && (mail.dirty || mail.touched)\">\r\n            <span *ngIf=\"mail.errors.required\">\r\n              <ion-label class=\"error-container\">Este campo es requerido</ion-label>\r\n            </span>\r\n            <span *ngIf=\"(mail.dirty || mail.touched) && mail.invalid && mail.errors.pattern\">\r\n              <ion-label class=\"error-container\">Enter an email valid</ion-label>\r\n            </span>\r\n          </div>\r\n          <small>Telefono:*</small>\r\n          <ion-item mode=\"md\">\r\n            <ion-icon slot=\"start\" name=\"call-sharp\"></ion-icon>\r\n            <ion-input placeholder=\"telefono\" type=\"name\" clearOnEdit=\"true\" clearInput formControlName=\"telefono\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div class=\"errors\" *ngIf=\"telefono.invalid && (telefono.dirty || telefono.touched)\">\r\n            <span *ngIf=\"telefono.errors.required\">\r\n              <ion-label class=\"error-container\">Este campo es requerido</ion-label>\r\n            </span>\r\n          </div>\r\n          <small>DPI:*</small>\r\n          <ion-item mode=\"md\">\r\n            <ion-icon slot=\"start\" name=\"code-working\"></ion-icon>\r\n            <ion-input placeholder=\"DPI\" type=\"name\" clearOnEdit=\"true\" clearInput formControlName=\"dpi\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div class=\"errors\" *ngIf=\"dpi.invalid && (dpi.dirty || dpi.touched)\">\r\n            <span *ngIf=\"dpi.errors.required\">\r\n              <ion-label class=\"error-container\">Este campo es requerido</ion-label>\r\n            </span>\r\n          </div>\r\n        </ion-list>\r\n        <ion-grid>\r\n          <br>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" class=\"button-clean\" fill=\"outline\" color=\"dark\" (click)=\"clean()\"\r\n                strong=\"true\">Limpiar\r\n                <ion-icon slot=\"start\" color=\"black\" name=\"close-circle-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" class=\"button-save\" type=\"submit\" [disabled]=\"!profileForm.valid\"\r\n                strong=\"true\">Guardar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 6655:
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = ".container {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-skeleton {\n  margin-left: 20%;\n  line-height: 30px;\n  border-radius: 9px;\n  margin-top: 10px;\n}\n\n.avatar {\n  border-radius: 100px;\n  height: 120px;\n  width: 120px;\n  position: relative;\n  margin: auto;\n  top: -80px;\n  box-shadow: 0 0 0 13px #f0f0f0;\n  margin-bottom: -65px;\n}\n\nh2 {\n  font-size: 32px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: #333;\n}\n\nh4 {\n  font-size: 13px;\n  color: #00baff;\n  letter-spacing: 1px;\n  margin-bottom: 25px;\n}\n\np {\n  font-size: 16px;\n  line-height: 26px;\n  margin-bottom: 20px;\n  color: #666;\n}\n\nion-icon {\n  color: #2582aa;\n}\n\nion-input {\n  --color: black;\n}\n\nion-list {\n  background-color: #FFF;\n  padding-top: 7%;\n}\n\nion-item {\n  --border-color: transparent !important;\n  --background: #F7F7F6;\n  border-radius: 14px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.item-skeleton {\n  border-radius: 14px;\n  margin-left: 4%;\n  line-height: 45px;\n  margin-bottom: 7%;\n}\n\n.button-skeleton {\n  border-radius: 18px;\n  line-height: 47px;\n  margin-top: 10%;\n  margin-left: 15px;\n}\n\n.margin {\n  margin-left: 4%;\n  margin-bottom: 5%;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\n.skeleton-img {\n  line-height: 167px;\n  --border-radius: 3px;\n  margin-top: -7px;\n}\n\n.button-clean {\n  --background: white;\n  margin-top: 10%;\n}\n\n.margin-bottom {\n  margin-bottom: 25px;\n}\n\n.margin-top-menos {\n  margin-top: -20px;\n}\n\nion-content {\n  --background: #F4F3EF;\n}\n\n.fotoPerfil {\n  width: 100%;\n  height: 60%;\n  --background: #2D383F;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHRjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0Usc0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0UsWUFBQTtBQUdKIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2tlbGV0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmF2YXRhcntcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogLTgwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMTNweCAjZjBmMGYwO1xyXG4gIG1hcmdpbi1ib3R0b206IC02NXB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMDBiYWZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweFxyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDM3LCAxMzAsIDE3MCk7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogI0Y3RjdGNjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLml0ZW0tc2tlbGV0b257XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5idXR0b24tc2tlbGV0b257XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBsaW5lLWhlaWdodDogNDdweDtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW57XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uYnV0dG9uLXNhdmV7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNGM0YzRhO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5za2VsZXRvbi1pbWcge1xyXG4gIGxpbmUtaGVpZ2h0OiAxNjdweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW4tdG9wOiAtN3B4O1xyXG59XHJcblxyXG4uYnV0dG9uLWNsZWFue1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbXtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC1tZW5vc3tcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjRGM0VGO1xyXG59XHJcblxyXG4uZm90b1BlcmZpbHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICAtLWJhY2tncm91bmQ6ICMyRDM4M0Y7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map