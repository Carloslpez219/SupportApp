"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_comentario_comentario_module_ts"],{

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

/***/ 543:
/*!*********************************************************!*\
  !*** ./src/app/comentario/comentario-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioPageRoutingModule": () => (/* binding */ ComentarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _comentario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario.page */ 5690);




const routes = [
    {
        path: '',
        component: _comentario_page__WEBPACK_IMPORTED_MODULE_0__.ComentarioPage
    }
];
let ComentarioPageRoutingModule = class ComentarioPageRoutingModule {
};
ComentarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComentarioPageRoutingModule);



/***/ }),

/***/ 3739:
/*!*************************************************!*\
  !*** ./src/app/comentario/comentario.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioPageModule": () => (/* binding */ ComentarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _comentario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario-routing.module */ 543);
/* harmony import */ var _comentario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comentario.page */ 5690);







let ComentarioPageModule = class ComentarioPageModule {
};
ComentarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comentario_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComentarioPageRoutingModule
        ],
        declarations: [_comentario_page__WEBPACK_IMPORTED_MODULE_1__.ComentarioPage]
    })
], ComentarioPageModule);



/***/ }),

/***/ 5690:
/*!***********************************************!*\
  !*** ./src/app/comentario/comentario.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioPage": () => (/* binding */ ComentarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comentario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comentario.page.html */ 9046);
/* harmony import */ var _comentario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comentario.page.scss */ 572);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 3201);










let ComentarioPage = class ComentarioPage {
    constructor(bpmService, alertService, loadingController, modalController, http, storage, actionSheetController) {
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.http = http;
        this.storage = storage;
        this.actionSheetController = actionSheetController;
        this.viewEntered = false;
        this.comentario = '';
        this.fileName = '';
        this.mostrarFoto = false;
    }
    ngOnInit() {
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    comentar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            (yield this.bpmService.comentar(this.comentario, this.ticket.codigo))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.ticketCodigo = yield resp.data.ticket_codigo;
                    this.comentarioCodigo = yield resp.data.comentario_codigo;
                    yield this.post();
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        yield (yield this.bpmService.getTicket(this.ticketCodigo)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.ticketNuevo = yield res.data;
                            yield this.alertService.presentToast('Comentario agregado correctamente', 'success', 2500);
                            yield this.modalController.dismiss(this.ticketNuevo);
                        }));
                    }), 500);
                }
                else {
                    this.alertService.presentAlert(resp.message);
                }
            }));
        });
    }
    onFileSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            this.selectedFile = event.target.files[0];
            this.fileName = this.selectedFile.name;
        });
    }
    post() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedFile) {
                console.log(this.selectedFile);
                const formData = new FormData();
                formData.append('documento', this.selectedFile);
                // eslint-disable-next-line max-len
                const upload$ = this.http.post(`https://gt.disatel.app/ROOT/API/API_ticket_foto.php?&ticket=${this.ticketCodigo}&usuario=${this.datosUsuario.codigo}&comentario=${this.comentarioCodigo}`, formData);
                upload$.subscribe(resp => {
                    console.log(resp);
                });
            }
        });
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                quality: 70,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64,
                promptLabelHeader: 'Seleccionar método',
                promptLabelPhoto: 'Galería',
                promptLabelPicture: 'Tomar fotografía',
                presentationStyle: 'popover'
            });
            const imageUrl = (yield 'data:image/jpeg;base64,') + image.base64String;
            this.photo = yield imageUrl;
            this.selectedFile = yield this.dataURLtoFile(imageUrl, 'image');
            this.datosUsuario = yield this.storage.get('datos');
            this.mostrarFoto = yield true;
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
};
ComentarioPage.ctorParameters = () => [
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
ComentarioPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
ComentarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comentario',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comentario_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comentario_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComentarioPage);



/***/ }),

/***/ 9046:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/comentario/comentario.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Comentario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n<br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Comentario :</ion-label>\r\n      <ion-textarea rows=\"6\" placeholder=\"Comentario...\" [(ngModel)]=\"comentario\">  </ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n<br>\r\n\r\n  <div *ngIf=\"mostrarFoto\">\r\n      <img [src]=\"photo\" class=\"imageDefault\">\r\n  </div>\r\n\r\n<ion-row>\r\n  <ion-col size=\"3.5\"></ion-col>\r\n  <ion-col size=\"4\">\r\n    <ion-button  style=\"--background: #c54f4d;\" class=\"upload-btn\"\r\n            (click)=\"takePicture()\">\r\n            Subir imágen\r\n             <ion-icon slot=\"start\" name=\"cloud-upload\" ></ion-icon>\r\n    </ion-button>\r\n  </ion-col>\r\n  <ion-col size=\"4\"></ion-col>\r\n</ion-row>\r\n\r\n<input type=\"file\" class=\"file-input\"\r\n(change)=\"onFileSelected($event)\" #fileUpload>\r\n\r\n<div class=\"file-upload\">\r\n  <ion-row>\r\n      <ion-col size=\"3.5\"></ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-button mat-mini-fab style=\"--background: #c54f4d;\" class=\"upload-btn\"\r\n        (click)=\"fileUpload.click()\">\r\n        Subir archivo\r\n         <ion-icon slot=\"start\" name=\"cloud-upload\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n  </ion-row>\r\n<ion-text style=\"text-align: center;\">\r\n  <h6>{{fileName || \"Aún no se ha subido ningún archivo.\"}}</h6>\r\n</ion-text>\r\n</div>\r\n\r\n\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"comentar()\">Guardar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 572:
/*!*************************************************!*\
  !*** ./src/app/comentario/comentario.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\n.file-input {\n  display: none;\n}\n\n.imageDefault {\n  height: 65%;\n  width: 65%;\n  display: block;\n  margin: auto;\n  border-radius: 15px 15px 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWVudGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFBRiIsImZpbGUiOiJjb21lbnRhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1zYXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNGM0YzRhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5cclxuLmZpbGUtaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWFnZURlZmF1bHR7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46YXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_comentario_comentario_module_ts.js.map