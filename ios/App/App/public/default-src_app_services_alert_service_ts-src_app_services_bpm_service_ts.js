"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_alert_service_ts-src_app_services_bpm_service_ts"],{

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

/***/ 2152:
/*!*****************************************!*\
  !*** ./src/app/services/bpm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BPMService": () => (/* binding */ BPMService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 7897);

/* eslint-disable max-len */




const ticket = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ticket;
const util = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.utilUrl;
const agregarFoto = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.agregarFoto;
const agregarFirma = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.agregarFirma;
const utilUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.utilUrl;
let BPMService = class BPMService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    conteoTickets(fini, ffin, sede) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}conteo_ticket&usuario=${this.datosUsuario.codigo}&fini${fini}&ffin${ffin}&sede=${sede}`);
            return this.http.get(`https://gt.disatel.app${ticket}conteo_ticket&usuario=${this.datosUsuario.codigo}&fini${fini}&ffin${ffin}&sede=${sede}`);
        });
    }
    listadoTickets(status, fini, ffin, sede) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}listado_tickets_status&usuario=${this.datosUsuario.codigo}&status=${status}&fini${fini}&ffin${ffin}&sede=${sede}`);
            return this.http.get(`https://gt.disatel.app${ticket}listado_tickets_status&usuario=${this.datosUsuario.codigo}&status=${status}&fini${fini}&ffin${ffin}&sede=${sede}`);
        });
    }
    getTicket(codigo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}ticket&codigo=${codigo}`);
            return this.http.get(`https://gt.disatel.app${ticket}ticket&codigo=${codigo}`);
        });
    }
    getTicketsAsignados(status, fini, ffin, prioridad, incidente, categoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}asignados&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
            return this.http.get(`https://gt.disatel.app${ticket}asignados&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
        });
    }
    getMisTickets(status, fini, ffin, prioridad, incidente, categoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}mis_tickets&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
            return this.http.get(`https://gt.disatel.app${ticket}mis_tickets&usuario=${this.datosUsuario.codigo}&categoria=${categoria}&incidente=${incidente}&prioridad=${prioridad}&status=${status}&fini=${fini}&ffin=${ffin}`);
        });
    }
    getSedes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_sedes&usuario=${this.datosUsuario.codigo}`);
            return this.http.get(`https://gt.disatel.app${util}lista_sedes&usuario=${this.datosUsuario.codigo}`);
        });
    }
    getSectores() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_sector`);
            return this.http.get(`https://gt.disatel.app${util}lista_sector`);
        });
    }
    getAreas(sede, area) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_areas&usuario=${this.datosUsuario.codigo}&sede=${sede}&area=${area}`);
            return this.http.get(`https://gt.disatel.app${util}lista_areas&usuario=${this.datosUsuario.codigo}&sede=${sede}&area=${area}`);
        });
    }
    getCategorias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_categorias_hd`);
            return this.http.get(`https://gt.disatel.app${util}lista_categorias_hd`);
        });
    }
    getPrioridades() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_prioridad_hd`);
            return this.http.get(`https://gt.disatel.app${util}lista_prioridad_hd`);
        });
    }
    getIncidentes(categoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_incidentes_hd&&categoria=${categoria}`);
            return this.http.get(`https://gt.disatel.app${util}lista_incidentes_hd&categoria=${categoria}`);
        });
    }
    guardarTicket(descripcion, incidente, prioridad, sede, sector, area) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}grabar_ticket&usuario=${this.datosUsuario.codigo}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
            return this.http.get(`https://gt.disatel.app${ticket}grabar_ticket&usuario=${this.datosUsuario.codigo}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
        });
    }
    getStatus(codigo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_status_hd&usuario=${this.datosUsuario.codigo}&ticket=${codigo}`);
            return this.http.get(`https://gt.disatel.app${util}lista_status_hd&usuario=${this.datosUsuario.codigo}&ticket=${codigo}`);
        });
    }
    getActivos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${util}lista_activos&usuario=${this.datosUsuario.codigo}&sede&sector&area=&combo=1`);
            return this.http.get(`https://gt.disatel.app${util}lista_activos&usuario=${this.datosUsuario.codigo}&sede&sector&area=&combo=1`);
        });
    }
    /////////////////////////////////////////////////
    comentar(comentario, codTicket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}comentario&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&comment=${comentario}`);
            return this.http.get(`https://gt.disatel.app${ticket}comentario&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&comment=${comentario}`);
        });
    }
    editar(codTicket, descripcion, incidente, prioridad, sede, sector, area) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}modificar_ticket&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
            return this.http.get(`https://gt.disatel.app${ticket}modificar_ticket&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&descripcion=${descripcion}&incidente=${incidente}&prioridad=${prioridad}&sede=${sede}&sector=${sector}&area=${area}`);
        });
    }
    cambiarStatus(comentario, codTicket, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}cambiar_status&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&status=${status}&observacion=${comentario}`);
            return this.http.get(`https://gt.disatel.app${ticket}cambiar_status&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&status=${status}&observacion=${comentario}`);
        });
    }
    agregarFalla(codTicket, activo, falla, situacion, fecha, hora, comentario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}agregar_falla&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&activo=${activo}&falla=${falla}&situacion=${situacion}&fecha=${fecha}&hora=${hora}&comentario=${comentario}`);
            return this.http.get(`https://gt.disatel.app${ticket}agregar_falla&usuario=${this.datosUsuario.codigo}&codigo=${codTicket}&activo=${activo}&falla=${falla}&situacion=${situacion}&fecha=${fecha}&hora=${hora}&comentario=${comentario}`);
        });
    }
    listadoPasosTicket(codTicket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}listado_pasos_ticket&usuario=${this.datosUsuario.codigo}&ticket=${codTicket}`);
            return this.http.get(`https://gt.disatel.app${ticket}listado_pasos_ticket&usuario=${this.datosUsuario.codigo}&ticket=${codTicket}`);
        });
    }
    post(codticket, status, file, comentario) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            console.log(file);
            fd.append('documento', file, file.name);
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app/ROOT/API/API_ticket_foto.php?&ticket=${codticket}&usuario=${this.datosUsuario.codigo}&status=${status}&comentario=${comentario}`, fd);
            return this.http.post(`https://gt.disatel.app/ROOT/API/API_ticket_foto.php?&ticket=${codticket}&usuario=${this.datosUsuario.codigo}&status=${status}&comentario=${comentario}`, fd);
        });
    }
    ejecutarPaso(codTicket, paso, incidente, ejecucion, observaciones) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.datosUsuario = yield this.storage.get('datos');
            console.log(`https://gt.disatel.app${ticket}ejecutar_paso&ticket=${codTicket}&paso_codigo=${paso}&tipo_incidente=${incidente}&ejecucion=${ejecucion}&observaciones=${observaciones}&usuario=${this.datosUsuario.codigo}`);
            return this.http.get(`https://gt.disatel.app${ticket}ejecutar_paso&ticket=${codTicket}&paso_codigo=${paso}&tipo_incidente=${incidente}&ejecucion=${ejecucion}&observaciones=${observaciones}&usuario=${this.datosUsuario.codigo}`);
        });
    }
};
BPMService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
BPMService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], BPMService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_alert_service_ts-src_app_services_bpm_service_ts.js.map