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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_falla_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agregar-falla.page.html */ 9830);
/* harmony import */ var _agregar_falla_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-falla.page.scss */ 1201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







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
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.getStatus()).subscribe((resp) => {
                console.log(resp);
                if (resp.status) {
                    this.activos = resp.data;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            });
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
        this.activo = ev.detail.value;
    }
    cambioFechaHasta(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        this.maxDate = new Date(yyyy, parseInt(mm, 10), parseInt(dd, 10));
        const hoy = this.maxDate;
        return hoy;
    }
    agregarFalla() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.agregarFalla(this.ticket.codigo, this.activo, this.falla, this.situacion, this.hasta, this.hora, this.descripcion))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    yield (yield this.bpmService.getTicket(this.ticket.codigo)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
};
AgregarFallaPage.ctorParameters = () => [
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
AgregarFallaPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
AgregarFallaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
            (yield this.bpmService.getStatus()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comentario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comentario.page.html */ 9046);
/* harmony import */ var _comentario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comentario.page.scss */ 572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let ComentarioPage = class ComentarioPage {
    constructor(bpmService, alertService, loadingController, modalController) {
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.viewEntered = false;
        this.comentario = '';
    }
    ngOnInit() {
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
    comentar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.comentar(this.comentario, this.ticket.codigo))
                .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.ticketCodigo = yield resp.data.ticket_codigo;
                    yield this.post();
                    this.alertService.presentToast('Comentario agregado correctamente', 'success', 2500);
                    this.modalController.dismiss();
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
            console.log(this.selectedFile);
            (yield this.bpmService.post(this.ticketCodigo, 1, this.selectedFile, this.comentario)).subscribe((resp) => {
                console.log(resp);
            });
        });
    }
};
ComentarioPage.ctorParameters = () => [
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ComentarioPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ComentarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_observaciones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./observaciones.page.html */ 9111);
/* harmony import */ var _observaciones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observaciones.page.scss */ 959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);






let ObservacionesPage = class ObservacionesPage {
    constructor(modalController, bpmService) {
        this.modalController = modalController;
        this.bpmService = bpmService;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    method() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.paso.checked) {
                this.ejecucion = 1;
            }
            else {
                this.ejecucion = 0;
            }
            (yield this.bpmService.ejecutarPaso(this.ticket.codigo, this.paso.paso_codigo, this.paso.tipo_incidente, this.ejecucion, this.paso.observaciones)).subscribe(resp => {
                console.log(resp);
            });
        });
    }
};
ObservacionesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService }
];
ObservacionesPage.propDecorators = {
    paso: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ObservacionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Agregar falla</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n<br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Activo</ion-label>\r\n      <ion-select (ionChange)=\"selectCategoria($event)\">\r\n        <ion-select-option *ngFor=\"let activo of activos\" value=\"{{activo.codigo}}\">{{activo.nombre}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Falla :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Falla...\" [(ngModel)]=\"falla\">  </ion-textarea>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Comentario :</ion-label>\r\n      <ion-textarea rows=\"4\" placeholder=\"Comentario...\" [(ngModel)]=\"descripcion\">  </ion-textarea>\r\n    </ion-item>\r\n    <br>\r\n    <ion-datetime [value]=\"maxDate.toISOString()\" min=\"2020-01-01\" (ionChange)=\"cambioFechaHasta($event)\" style=\"margin-left: 20px;\r\n    border-radius: 20px;\"></ion-datetime>\r\n  </ion-list>\r\n<br>\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"agregarFalla()\">Guardar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Cambio de status</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n<br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Comentario :</ion-label>\r\n      <ion-textarea rows=\"6\" placeholder=\"Comentario...\" [(ngModel)]=\"comentario\">  </ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n<br>\r\n  <ion-row>\r\n    <ion-col size=\"2.7\"></ion-col>\r\n    <ion-col size=\"6.6\">\r\n      <div class=\"file-input\">\r\n        <input type=\"file\" id=\"file\" class=\"file\" (change)=\"onFileSelected($event)\">\r\n        <label for=\"file\">\r\n          Seleccionar archivo\r\n          <p class=\"file-name\"></p>\r\n        </label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"2.7\"></ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\"></ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"comentar()\">Guardar\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\"></ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__bounceInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Observaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__bounceInDown\">\n  <br>\n  <br>\n  <br>\n\n  <ion-label class=\"ion-padding\">Comentario: </ion-label>\n  <br>\n  <br>\n\n    <ion-item mode=\"md\">\n      <ion-textarea rows=\"10\" placeholder=\"Observaciones...\" clearOnEdit=\"true\" clearInput [(ngModel)]=\"paso.observaciones\"></ion-textarea>\n      <ion-icon name=\"chatbox-ellipses-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n\n  <ion-grid>\n    <br>\n    <ion-row>\n      <ion-col size=\"3\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" class=\"button-save\" (click)=\"method()\"\n          strong=\"true\">Aceptar\n          <ion-icon slot=\"start\" color=\"white\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-card style=\"background-color: #f0f0f0; margin-top: 15px; margin-bottom: 10px; height: 80%;\">\r\n        <ion-card-subtitle class=\"ion-margin\">Status actual:</ion-card-subtitle>\r\n        <h2 style=\"color: cornflowerblue\" class=\"ion-margin\">{{ticket.estatus}}</h2>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" style=\"--background: #2D383F\" (click)=\"cambiarStatus(ticket)\"><b>Cambiar Status</b></ion-button>\r\n      <ion-button expand=\"block\" style=\"--background: #1ab394\" (click)=\"cambiarComentar(ticket)\"><b>Comentar</b></ion-button>\r\n      <ion-button expand=\"block\" style=\"--background: #f8ac59\" (click)=\"agregarFalla(ticket)\"><b>Agregar Falla</b></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Sede: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sede}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Área: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.area}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Categoría: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.categoria}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Prioridad: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.prioridad}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Tiempo en espera o Hold on: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.espera}}</ion-label></div>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Sector: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sector}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Nivel: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.nivel}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider style=\"background-color: #f0f0f0;\">\r\n    <ion-label>Incidente: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.incidente}}</ion-label></div>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Descripción: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.descripcion}}</ion-label></div>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.fotos.length !== 0\">\r\n    <ion-label>Archivos por status: </ion-label>\r\n  </ion-item-divider>\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.fotos\">\r\n      <ion-card style=\"background-color: #f0f0f0;\" (click)=\"verpdf(item.foto)\">\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <ion-badge class=\"badge\">Fecha: </ion-badge>\r\n          </ion-col>\r\n          <ion-col size=\"8\">\r\n            <ion-label>{{item.fecha_reg}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.comentarios.length !== 0\">\r\n    <ion-label>Archivos por comentarios: </ion-label>\r\n  </ion-item-divider>\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.comentarios\">\r\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" (click)=\"verpdf(ticket.archivo)\">\r\n\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Comentario :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.comentario}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Fecha/ Hora :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.fecha_reg}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.asignacion.length !== 0\">\r\n    <ion-label>Usuarios asignados: </ion-label>\r\n  </ion-item-divider>\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.asignacion\">\r\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" >\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"2.8\">\r\n              <ion-badge class=\"badge\">Nombre :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9.2\">\r\n              <ion-text>\r\n                {{item.nombre}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.bitacora.length !== 0\">\r\n    <ion-label>Bitácora: </ion-label>\r\n  </ion-item-divider>\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.bitacora\">\r\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" >\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Acción :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.descripcion}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"3.8\">\r\n              <ion-badge class=\"badge\">Fecha/Hora :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"8.2\">\r\n              <ion-text>\r\n                {{item.fecha_reg}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4.2\">\r\n              <ion-badge class=\"badge\">Observaciones :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"7.8\">\r\n              <ion-text>\r\n                {{item.observacion}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"3.1\">\r\n              <ion-badge class=\"badge\">Usuario :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"8.9\">\r\n              <ion-text>\r\n                {{item.nombre}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Pasos a ejecutar: </ion-label>\r\n  </ion-item-divider>\r\n  <br>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let paso of pasos\" [disabled]=\"paso.puede_contestar\" >\r\n      <ion-label class=\"ion-text-wrap\">{{paso.descripcion}}</ion-label>\r\n      <ion-checkbox slot=\"start\" [(ngModel)]=\"paso.checked\" (ionChange)=\"onChange($event, paso)\"></ion-checkbox>\r\n      <ion-button (click)=\"observacion(paso)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Comentar\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

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

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWJpby1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2FtYmlvLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 572:
/*!*************************************************!*\
  !*** ./src/app/comentario/comentario.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\n.file {\n  opacity: 0;\n  width: 0.1px;\n  height: 0.1px;\n  position: absolute;\n}\n\n.file-input label {\n  display: block;\n  position: relative;\n  width: 200px;\n  height: 50px;\n  border-radius: 25px;\n  background: linear-gradient(40deg, #4c4c4a, #000000);\n  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-out;\n}\n\n.file-name {\n  position: absolute;\n  bottom: -35px;\n  left: 10px;\n  font-size: 0.85rem;\n  color: #555;\n}\n\ninput:hover + label,\ninput:focus + label {\n  transform: scale(1.02);\n}\n\n/* Adding an outline to the label on focus */\n\ninput:focus + label {\n  outline: 1px solid #000;\n  outline: -webkit-focus-ring-color auto 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWVudGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLHNCQUFBO0FBQ0Y7O0FBRUEsNENBQUE7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLDBDQUFBO0FBQ0YiLCJmaWxlIjoiY29tZW50YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDAuMXB4O1xyXG4gIGhlaWdodDogMC4xcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIzRjNGM0YSwjMDAwMDAwKTtcclxuICBib3gtc2hhZG93OiAwIDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmZpbGUtbmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTM1cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbmlucHV0OmhvdmVyICsgbGFiZWwsXHJcbmlucHV0OmZvY3VzICsgbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbi8qIEFkZGluZyBhbiBvdXRsaW5lIHRvIHRoZSBsYWJlbCBvbiBmb2N1cyAqL1xyXG5pbnB1dDpmb2N1cyArIGxhYmVsIHtcclxuICBvdXRsaW5lOiAxcHggc29saWQgIzAwMDtcclxuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAycHg7XHJcbn0iXX0= */";

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

module.exports = ".margin {\n  margin-left: 21px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\nion-slides {\n  --bullet-background: rgb(59, 59, 59);\n  --bullet-background-active: black;\n}\n\n.badge {\n  background-color: #4c4c4a;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW1pdGUtdGlja2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJ0cmFtaXRlLXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJnYig1OSwgNTksIDU5KTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiBibGFjaztcclxufVxyXG5cclxuLmJhZGdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGM0YTtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_tramite-ticket_tramite-ticket_page_ts.js.map