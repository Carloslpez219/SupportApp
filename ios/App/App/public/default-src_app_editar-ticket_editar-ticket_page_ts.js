"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_editar-ticket_editar-ticket_page_ts"],{

/***/ 3950:
/*!*****************************************************!*\
  !*** ./src/app/editar-ticket/editar-ticket.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarTicketPage": () => (/* binding */ EditarTicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editar_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editar-ticket.page.html */ 2247);
/* harmony import */ var _editar_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-ticket.page.scss */ 7059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);







let EditarTicketPage = class EditarTicketPage {
    constructor(loadingController, modalController, bpmService, alertService) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.viewEntered = false;
        this.area = '1';
        this.descripcion = '';
        this.estadoActual = '';
        this.prioridadActual = '';
        this.sectorActual = '';
        this.sedeActual = '';
        this.incidenteActual = '';
        this.areaActual = '';
        this.categoriaActual = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.getSedes()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.sedes = yield resp.data;
                    this.sedeActual = yield this.ticket.sede_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getCategorias()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.categorias = yield resp.data;
                    this.categoriaActual = yield this.ticket.categoria_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getIncidentes()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.incidentes = yield resp.data;
                    this.incidenteActual = yield this.ticket.incidente_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getPrioridades()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.prioridades = yield resp.data;
                    this.prioridadActual = yield this.ticket.prioridad_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getSectores()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.sectores = yield resp.data;
                    this.sectorActual = yield this.ticket.sector_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getAreas(this.sedeActual)).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.areas = yield resp.data;
                    this.areaActual = yield this.ticket.area_codigo;
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
            (yield this.bpmService.getStatus()).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                if (resp.status) {
                    this.status = yield resp.data;
                    this.estadoActual = yield this.ticket.estatus_codigo;
                    console.log(this.estadoActual);
                }
                else {
                    this.alertService.presentAlert('Ha ocurrido un error en el servidor, intente de nuevo más tarde');
                }
            }));
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
        this.categoriaActual = ev.detail.value;
    }
    selectArea(ev) {
        console.log(ev);
        this.areaActual = ev.detail.value;
    }
    selectIncidente(ev) {
        this.incidenteActual = ev.detail.value;
    }
    selectSede(ev) {
        this.sedeActual = ev.detail.value;
    }
    selectSector(ev) {
        this.sectorActual = ev.detail.value;
    }
    selectPrioridad(ev) {
        this.prioridadActual = ev.detail.value;
    }
    selectEstado(ev) {
        this.estadoActual = ev.detail.value;
    }
    editar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            if (this.sede === '' && this.sector === '' && this.area === '' && this.categoria === ''
                && this.prioridad === '' && this.incidente === '') {
                this.alertService.presentAlert('Debe de llenar todos los campos antes de actualizar el ticket.');
            }
            else {
                (yield this.bpmService.editar(this.ticket.codigo, this.descripcion, this.incidenteActual, this.prioridadActual, this.sedeActual, this.sectorActual, this.areaActual))
                    .subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(resp);
                    if (resp.status) {
                        yield (yield this.bpmService.getTicket(this.ticket.codigo)).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            if (res.status) {
                                console.log(resp);
                                this.ticketNuevo = yield res.data;
                                yield this.alertService.presentToast('El ticket se ha actualizado correctamente', 'success', 2500);
                                this.post();
                                yield this.modalController.dismiss(this.ticketNuevo);
                            }
                            else {
                                this.alertService.presentAlert(res.message);
                            }
                        }));
                    }
                    else {
                        this.alertService.presentAlert(resp.message);
                    }
                }));
                this.modalController.dismiss();
            }
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
    onFileSelected(ev) {
        console.log(ev);
        this.selectedFile = ev.target.files[0];
    }
    post() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.bpmService.post(this.ticket.codigo, 1, this.selectedFile, this.descripcion)).subscribe((resp) => {
                console.log(resp);
            });
        });
    }
};
EditarTicketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
EditarTicketPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
EditarTicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editar-ticket',
        template: _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editar_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editar_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditarTicketPage);



/***/ }),

/***/ 2247:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/editar-ticket/editar-ticket.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Actualización de ticket</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\n\n  <br>\n  <ion-list>\n    <ion-item>\n      <ion-label>Categoría</ion-label>\n      <ion-select (ionChange)=\"selectCategoria($event)\" [value]=\"categoriaActual\">\n        <ion-select-option *ngFor=\"let categoria of categorias\" value=\"{{categoria.codigo}}\">{{categoria.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Área</ion-label>\n      <ion-select (ionChange)=\"selectArea($event)\" [value]=\"areaActual\">\n        <ion-select-option *ngFor=\"let area of areas\" value=\"{{area.codigo}}\">{{area.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Incidente</ion-label>\n      <ion-select (ionChange)=\"selectIncidente($event)\" [value]=\"incidenteActual\">\n        <ion-select-option *ngFor=\"let incidente of incidentes\" value=\"{{incidente.codigo}}\">{{incidente.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sede</ion-label>\n      <ion-select (ionChange)=\"selectSede($event)\" [value]=\"sedeActual\">\n        <ion-select-option *ngFor=\"let sede of sedes\" value=\"{{sede.codigo}}\">{{sede.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sector</ion-label>\n      <ion-select (ionChange)=\"selectSector($event)\" [value]=\"sectorActual\">\n        <ion-select-option *ngFor=\"let sector of sectores\" value=\"{{sector.codigo}}\">{{sector.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Prioridad</ion-label>\n      <ion-select (ionChange)=\"selectPrioridad($event)\" [value]=\"prioridadActual\">\n        <ion-select-option *ngFor=\"let prioridad of prioridades\" value=\"{{prioridad.codigo}}\">{{prioridad.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status</ion-label>\n      <ion-select (ionChange)=\"selectCategoria($event)\" [value]=\"estadoActual\">\n        <ion-select-option *ngFor=\"let estado of status\" value=\"{{estado.codigo}}\">{{estado.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Descripción :</ion-label>\n      <ion-textarea rows=\"4\" placeholder=\"Descripción...\" [(ngModel)]=\"descripcion\">  </ion-textarea>\n    </ion-item>\n  </ion-list>\n<br>\n\n<ion-row>\n  <ion-col size=\"2.7\"></ion-col>\n  <ion-col size=\"6.6\">\n    <div class=\"file-input\">\n      <input type=\"file\" id=\"file\" class=\"file\" (change)=\"onFileSelected($event)\">\n      <label for=\"file\">\n        Seleccionar archivo\n        <p class=\"file-name\"></p>\n      </label>\n    </div>\n  </ion-col>\n  <ion-col size=\"2.7\"></ion-col>\n</ion-row>\n\n  <br>\n  <ion-row>\n    <ion-col size=\"3\"></ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"block\" class=\"button-save\" strong=\"true\" (click)=\"editar()\">Grabar\n                <ion-icon slot=\"start\" color=\"white\" name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"3\"></ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ 7059:
/*!*******************************************************!*\
  !*** ./src/app/editar-ticket/editar-ticket.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.button-save {\n  --background: #4c4c4a;\n  color: white;\n  margin-top: 10%;\n}\n\n.file {\n  opacity: 0;\n  width: 0.1px;\n  height: 0.1px;\n  position: absolute;\n}\n\n.file-input label {\n  display: block;\n  position: relative;\n  width: 200px;\n  height: 50px;\n  border-radius: 25px;\n  background: linear-gradient(40deg, #4c4c4a, #000000);\n  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease-out;\n}\n\n.file-name {\n  position: absolute;\n  bottom: -35px;\n  left: 10px;\n  font-size: 0.85rem;\n  color: #555;\n}\n\ninput:hover + label,\ninput:focus + label {\n  transform: scale(1.02);\n}\n\n/* Adding an outline to the label on focus */\n\ninput:focus + label {\n  outline: 1px solid #000;\n  outline: -webkit-focus-ring-color auto 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci10aWNrZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLHNCQUFBO0FBQ0Y7O0FBRUEsNENBQUE7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLDBDQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdGFyLXRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2NjYxNUI7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2F2ZXtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjNGM0YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmZpbGUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDAuMXB4O1xyXG4gIGhlaWdodDogMC4xcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIzRjNGM0YSwjMDAwMDAwKTtcclxuICBib3gtc2hhZG93OiAwIDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmZpbGUtbmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTM1cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbmlucHV0OmhvdmVyICsgbGFiZWwsXHJcbmlucHV0OmZvY3VzICsgbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbi8qIEFkZGluZyBhbiBvdXRsaW5lIHRvIHRoZSBsYWJlbCBvbiBmb2N1cyAqL1xyXG5pbnB1dDpmb2N1cyArIGxhYmVsIHtcclxuICBvdXRsaW5lOiAxcHggc29saWQgIzAwMDtcclxuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAycHg7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_editar-ticket_editar-ticket_page_ts.js.map