"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_tramite-ticket_tramite-ticket_page_ts"],{

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

/***/ 7030:
/*!*******************************************************!*\
  !*** ./src/app/tramite-ticket/tramite-ticket.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TramiteTicketPage": () => (/* binding */ TramiteTicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tramite_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tramite-ticket.page.html */ 7703);
/* harmony import */ var _tramite_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tramite-ticket.page.scss */ 862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _cambio_status_cambio_status_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cambio-status/cambio-status.page */ 2877);
/* harmony import */ var _comentario_comentario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comentario/comentario.page */ 5690);
/* harmony import */ var _agregar_falla_agregar_falla_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agregar-falla/agregar-falla.page */ 8710);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _observaciones_observaciones_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../observaciones/observaciones.page */ 3519);












let TramiteTicketPage = class TramiteTicketPage {
    constructor(loadingController, modalController, sanitizer, alertService, bpmService) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.alertService = alertService;
        this.bpmService = bpmService;
        this.viewEntered = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.listadoPasosTicket(this.ticket.codigo)).subscribe((resp) => {
                console.log(resp);
                this.pasos = resp.data;
            });
            console.log(this.ticket);
        });
    }
    acordeon() {
        let acc = document.getElementsByClassName('accordion');
        let i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function () {
                this.classList.toggle('active');
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        }
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.viewEntered = yield true;
                yield this.loadingController.dismiss();
            }), 800);
        });
    }
    ionViewWillLeave() {
        this.viewEntered = false;
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    cambiarStatus(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const modal = yield this.modalController.create({
                component: _cambio_status_cambio_status_page__WEBPACK_IMPORTED_MODULE_2__.CambioStatusPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            console.log(value);
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
    cambiarComentar(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const modal = yield this.modalController.create({
                component: _comentario_comentario_page__WEBPACK_IMPORTED_MODULE_3__.ComentarioPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            console.log(value);
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
    agregarFalla(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const modal = yield this.modalController.create({
                component: _agregar_falla_agregar_falla_page__WEBPACK_IMPORTED_MODULE_4__.AgregarFallaPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            console.log(value);
            if (value.data) {
                this.viewEntered = yield false;
                this.ticket = yield value.data;
                setTimeout(() => {
                    this.viewEntered = true;
                    this.loadingController.dismiss();
                }, 800);
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    verpdf(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    observacion(paso) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const ticket = yield this.ticket;
            const modal = yield this.modalController.create({
                component: _observaciones_observaciones_page__WEBPACK_IMPORTED_MODULE_7__.ObservacionesPage,
                backdropDismiss: false,
                componentProps: { paso, ticket }
            });
            yield modal.present();
        });
    }
    onChange(ev, paso) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (paso.checked) {
                this.ejecucion = 1;
            }
            else {
                this.ejecucion = 0;
            }
            (yield this.bpmService.ejecutarPaso(this.ticket.codigo, paso.paso_codigo, paso.tipo_incidente, this.ejecucion, paso.observaciones)).subscribe(resp => {
                console.log(resp);
            });
            console.log(ev);
        });
    }
};
TramiteTicketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_6__.BPMService }
];
TramiteTicketPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
TramiteTicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tramite-ticket',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tramite_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tramite_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TramiteTicketPage);



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

/***/ 7703:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tramite-ticket/tramite-ticket.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6.5\">\r\n      <ion-card style=\"background-color: #f0f0f0; margin-top: 15px; margin-bottom: 10px; height: 80%;\">\r\n        <ion-card-subtitle class=\"ion-margin\">Status actual:</ion-card-subtitle>\r\n        <h2 style=\"color: cornflowerblue\" class=\"ion-margin\">{{ticket.estatus}}</h2>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"5.5\">\r\n      <ion-button expand=\"block\" style=\"--background: #2D383F\" (click)=\"cambiarStatus(ticket)\"><b>Cambiar Status</b></ion-button>\r\n      <ion-button expand=\"block\" style=\"--background: #1ab394\" (click)=\"cambiarComentar(ticket)\"><b>Comentar</b></ion-button>\r\n      <ion-button expand=\"block\" style=\"--background: #f8ac59\" (click)=\"agregarFalla(ticket)\"><b>Agregar Falla</b></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Sede: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sede}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Área: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.area}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Categoría: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.categoria}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Prioridad: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.prioridad}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Tiempo en espera o Hold on: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.espera}}</ion-label></div>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Sector: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sector}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Nivel: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.nivel}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\r\n    <ion-label>Incidente: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.incidente}}</ion-label></div>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Descripción: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.descripcion}}</ion-label></div>\r\n\r\n\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Pasos a ejecutar: </ion-label>\r\n  </ion-item-divider>\r\n  <br>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let paso of pasos\" [disabled]=\"!paso.puede_contestar\" >\r\n      <ion-label class=\"ion-text-wrap\">{{paso.descripcion}}</ion-label>\r\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"paso.checked\" (ionChange)=\"onChange($event, paso)\"></ion-checkbox>\r\n      <ion-button (click)=\"observacion(paso)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Comentar\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.fotos.length !== 0\">\r\n    <ion-label>Archivos por status: </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.fotos\">\r\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" (click)=\"verpdf(item.foto)\">\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Fecha/ Hora :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.fecha_reg}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n            <img src=\"../../assets/img/PDF.png\" style=\"height: 90px;\"/>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.comentarios.length !== 0\">\r\n    <ion-label>Archivos por comentarios: </ion-label>\r\n  </ion-item-divider>\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.comentarios\">\r\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" (click)=\"verpdf(item.archivo)\">\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Comentario :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.comentario}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Fecha/ Hora :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.fecha_reg}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <img src=\"../../assets/img/PDF.png\" style=\"height: 90px;\"/>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <button class=\"accordion\" (click)=\"acordeon()\" *ngIf=\"ticket.asignacion.length !== 0\"><ion-label style=\"background-color: #f0f0f0; border-radius: 10px; font-size: 17px; font-weight: bolder;\">Usuarios asignados: </ion-label></button>\r\n  <div class=\"panel\">\r\n\r\n        <ion-card style=\"background-color: #f0f0f0; width: 90%;\" *ngFor=\"let item of ticket.asignacion\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"3.5\">\r\n                <ion-badge class=\"badge\">Nombre :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"8.5\">\r\n                <ion-text>\r\n                  {{item.nombre}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n  </div>\r\n\r\n  <button class=\"accordion\" (click)=\"acordeon()\" *ngIf=\"ticket.asignacion.length !== 0\"><ion-label style=\"background-color: #f0f0f0; border-radius: 10px; font-size: 17px; font-weight: bolder;\">Bitácora: </ion-label></button>\r\n  <div class=\"panel\">\r\n        <ion-card style=\"background-color: #f0f0f0; width: 90%;\" *ngFor=\"let item of ticket.bitacora\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"3.2\">\r\n                <ion-badge class=\"badge\">Acción :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"8.8\">\r\n                <ion-text>\r\n                  {{item.descripcion}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4.2\">\r\n                <ion-badge class=\"badge\">Fecha/Hora :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"7.8\">\r\n                <ion-text>\r\n                  {{item.fecha_reg}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5.5\">\r\n                <ion-badge class=\"badge\">Observaciones :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"6.5\">\r\n                <ion-text>\r\n                  {{item.observacion}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"3.5\">\r\n                <ion-badge class=\"badge\">Usuario :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"8.5\">\r\n                <ion-text>\r\n                  {{item.nombre}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 1201:
/*!*******************************************************!*\
  !*** ./src/app/agregar-falla/agregar-falla.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVnYXItZmFsbGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYWdyZWdhci1mYWxsYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 7177:
/*!*******************************************************!*\
  !*** ./src/app/cambio-status/cambio-status.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWJpby1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2FtYmlvLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 572:
/*!*************************************************!*\
  !*** ./src/app/comentario/comentario.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\n.file-input {\n  display: none;\n}\n\n.imageDefault {\n  height: 65%;\n  width: 65%;\n  display: block;\n  margin: auto;\n  border-radius: 15px 15px 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWVudGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFBRiIsImZpbGUiOiJjb21lbnRhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1zYXZle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNGM0YzRhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5cclxuLmZpbGUtaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWFnZURlZmF1bHR7XHJcbiAgaGVpZ2h0OiA2NSU7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46YXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 959:
/*!*******************************************************!*\
  !*** ./src/app/observaciones/observaciones.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #f0f0f0;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.check {\n  display: block;\n  width: 60%;\n  margin: auto;\n}\n\nion-item {\n  --border-color: transparent !important;\n  --background: #ececec;\n  border-radius: 14px;\n  margin-left: 4%;\n  margin-right: 4%;\n}\n\nion-list {\n  background-color: #FFF;\n}\n\n.button-save {\n  --background: #4c4c4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmFjaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Im9ic2VydmFjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNjY2MTVCO1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hlY2t7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5idXR0b24tc2F2ZXtcclxuICAtLWJhY2tncm91bmQ6ICM0YzRjNGE7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 862:
/*!*********************************************************!*\
  !*** ./src/app/tramite-ticket/tramite-ticket.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.margin {\n  margin-left: 21px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\nion-slides {\n  --bullet-background: rgb(59, 59, 59);\n  --bullet-background-active: black;\n}\n.badge {\n  background-color: #4c4c4a;\n}\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/* Style the buttons that are used to open and close the accordion panel */\n.accordion {\n  background-color: #eee;\n  color: black;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: none;\n  outline: none;\n  transition: 0.4s;\n}\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active, .accordion:hover {\n  background-color: #f0f0f0;\n}\n/* Style the accordion panel. Note: hidden by default */\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n.accordion:after {\n  content: \"➕\";\n  /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: #f0f0f0;\n  float: right;\n  margin-left: 5px;\n}\n.active:after {\n  content: \"➖\";\n  /* Unicode character for \"minus\" sign (-) */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW1pdGUtdGlja2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQTtFQUNJLG9DQUFBO0VBQ0EsaUNBQUE7QUFFSjtBQUNBO0VBQ0kseUJBQUE7QUFFSjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRUo7QUFDRSwwRUFBQTtBQUNGO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQSwwSUFBQTtBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQUNBLHVEQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQW1CLDBDQUFBO0VBQ25CLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLFlBQUE7RUFBa0IsMkNBQUE7QUFJcEIiLCJmaWxlIjoidHJhbWl0ZS10aWNrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZ2IoNTksIDU5LCA1OSk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiBibGFjaztcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGM0YTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBhY2NvcmRpb24gcGFuZWwgKi9cbi5hY2NvcmRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgYnV0dG9uIGlmIGl0IGlzIGNsaWNrZWQgb24gKGFkZCB0aGUgLmFjdGl2ZSBjbGFzcyB3aXRoIEpTKSwgYW5kIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgaXQgKGhvdmVyKSAqL1xuLmFjdGl2ZSwgLmFjY29yZGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi8qIFN0eWxlIHRoZSBhY2NvcmRpb24gcGFuZWwuIE5vdGU6IGhpZGRlbiBieSBkZWZhdWx0ICovXG4ucGFuZWwge1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5hY2NvcmRpb246YWZ0ZXIge1xuICBjb250ZW50OiBcIuKelVwiO1xuICAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXCJwbHVzXCIgc2lnbiAoKykgKi9cbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCLinpZcIjtcbiAgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFwibWludXNcIiBzaWduICgtKSAqL1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_tramite-ticket_tramite-ticket_page_ts.js.map