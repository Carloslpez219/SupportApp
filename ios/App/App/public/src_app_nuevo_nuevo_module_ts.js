"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nuevo_nuevo_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nuevo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./nuevo.page.html */ 5551);
/* harmony import */ var _nuevo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevo.page.scss */ 8250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 3201);









let NuevoPage = class NuevoPage {
    constructor(navCtrl, bpmService, alertService, loadingController, storage) {
        this.navCtrl = navCtrl;
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.storage = storage;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.MostrarPrioridad = false;
        this.mostrarSector = false;
        //
        this.sede = '';
        this.area = '';
        this.categoria = '';
        this.incidente = '';
        this.descripcion = '';
        this.ticketCodigo = '';
        this.mostrarFoto = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            (yield this.bpmService.getIncidentes(this.categoria)).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.status) {
                    this.incidentes = yield resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getAreas(this.sede, this.area)).subscribe((resp) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.categoria = ev.detail.value;
            (yield this.bpmService.getIncidentes(this.categoria)).subscribe((resp) => {
                if (resp.status) {
                    this.incidentes = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
        });
    }
    selectArea(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.area = yield ev.detail.value;
            (yield this.bpmService.getAreas(this.sede, this.area)).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.codigoSector = yield resp.data[0].codigo_sector;
                    this.nombreSector = yield resp.data[0].nombre_sector;
                    this.mostrarSector = yield true;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
        });
    }
    selectIncidente(ev) {
        this.incidente = ev.detail.value;
        this.incidentes.forEach(element => {
            if (element.codigo === this.incidente) {
                this.nombre_prioridad = element.nombre_prioridad;
                this.codigo_prioridad = element.codigo_prioridad;
            }
        });
        this.MostrarPrioridad = true;
    }
    selectSede(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.sede = ev.detail.value;
            (yield this.bpmService.getAreas(this.sede, this.area)).subscribe((resp) => {
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    guardarTicket() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            (yield this.bpmService.guardarTicket(this.descripcion, this.incidente, this.codigo_prioridad, this.sede, this.codigoSector, this.area))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.ticketCodigo = yield resp.data.ticket_codigo;
                    yield this.alertService.presentToast('El ticket ha sigo generado con éxito.', 'success', 2500);
                    this.loadingController.dismiss();
                    this.navCtrl.back();
                    this.post();
                }
                else {
                    this.alertService.presentAlert(resp.message);
                    this.loadingController.dismiss();
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
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
                quality: 70,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64
            });
            const imageUrl = (yield 'data:image/jpeg;base64,') + image.base64String;
            this.photo = yield imageUrl;
            this.selectedFile = yield this.dataURLtoFile(imageUrl, 'image');
            this.datosUsuario = yield this.storage.get('datos');
            this.mostrarFoto = yield true;
        });
    }
    post() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.post(this.ticketCodigo, this.area, this.selectedFile, this.descripcion)).subscribe((resp) => {
                console.log(resp);
            });
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
NuevoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
NuevoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-nuevo',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nuevo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nuevo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NuevoPage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Nuevo Ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Categoría</ion-label>\r\n      <ion-select (ionChange)=\"selectCategoria($event)\">\r\n        <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{categoria.codigo}}\">{{categoria.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Incidente</ion-label>\r\n      <ion-select (ionChange)=\"selectIncidente($event)\">\r\n        <ion-select-option *ngFor=\"let incidente of incidentes\" value=\"{{incidente.codigo}}\">{{incidente.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Prioridad</ion-label>\r\n      <ion-note slot=\"end\" color=\"dark\" *ngIf=\"MostrarPrioridad\">{{nombre_prioridad}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sede</ion-label>\r\n      <ion-select (ionChange)=\"selectSede($event)\">\r\n        <ion-select-option *ngFor=\"let sede of sedes\" value=\"{{sede.codigo}}\">{{sede.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Área</ion-label>\r\n      <ion-select (ionChange)=\"selectArea($event)\">\r\n        <ion-select-option *ngFor=\"let area of areas\" value=\"{{area.codigo}}\">{{area.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Sector</ion-label>\r\n      <ion-note slot=\"end\" color=\"dark\" *ngIf=\"mostrarSector\">{{nombreSector}}</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Descripción :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Descripción...\" [(ngModel)]=\"descripcion\">  </ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <br>\r\n\r\n  <div *ngIf=\"mostrarFoto\">\r\n    <img [src]=\"photo\" class=\"imageDefault\">\r\n</div>\r\n\r\n<ion-row>\r\n<ion-col size=\"3.5\"></ion-col>\r\n<ion-col size=\"4\">\r\n  <ion-button  style=\"--background: #c54f4d;\" class=\"upload-btn\"\r\n          (click)=\"takePicture()\">\r\n          Subir imágen\r\n           <ion-icon slot=\"start\" name=\"cloud-upload\" ></ion-icon>\r\n  </ion-button>\r\n</ion-col>\r\n<ion-col size=\"4\"></ion-col>\r\n</ion-row>\r\n\r\n<input type=\"file\" class=\"file-input\"\r\n(change)=\"onFileSelected($event)\" #fileUpload>\r\n\r\n<div class=\"file-upload\">\r\n<ion-row>\r\n    <ion-col size=\"3.5\"></ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-button mat-mini-fab style=\"--background: #c54f4d;\" class=\"upload-btn\"\r\n      (click)=\"fileUpload.click()\">\r\n      Subir archivo\r\n       <ion-icon slot=\"start\" name=\"cloud-upload\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"4\"></ion-col>\r\n</ion-row>\r\n<ion-text style=\"text-align: center;\">\r\n<h6>{{fileName || \"Aún no se ha subido ningún archivo.\"}}</h6>\r\n</ion-text>\r\n</div>\r\n\r\n  <br>\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"guardarTicket()\">Grabar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8250:
/*!***************************************!*\
  !*** ./src/app/nuevo/nuevo.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.file-input {\n  display: none;\n}\n\n.imageDefault {\n  height: 65%;\n  width: 65%;\n  display: block;\n  margin: auto;\n  border-radius: 15px 15px 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51ZXZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0oiLCJmaWxlIjoibnVldm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1zYXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNGM0YzRhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5maWxlLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2VEZWZhdWx0e1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgfVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_nuevo_nuevo_module_ts.js.map