"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bpm.service */ 2152);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);
/* harmony import */ var _listado_listado_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listado/listado.page */ 6777);
/* harmony import */ var _ticket_ticket_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ticket/ticket.page */ 6412);
/* harmony import */ var _tramite_ticket_tramite_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tramite-ticket/tramite-ticket.page */ 7030);
/* harmony import */ var _filtros_filtros_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filtros/filtros.page */ 3061);
/* harmony import */ var _filtro_dash_filtro_dash_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filtro-dash/filtro-dash.page */ 5524);













let HomePage = class HomePage {
    constructor(navController, storage, bpmService, alertService, modalController, loadingController) {
        this.navController = navController;
        this.storage = storage;
        this.bpmService = bpmService;
        this.alertService = alertService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        //Filtro conteo
        this.fini = '';
        this.ffin = '';
        this.sede = '';
        //
        this.cardSkeleton = true;
        this.skeletonScreen = Array(9);
        //
        this.asignados = true;
        this.mis = false;
        this.dash = false;
        //Filtro Asignados
        this.finiC = '';
        this.ffinA = '';
        this.status = '';
        this.categoria = '';
        this.incidentes = '';
        this.prioridad = '';
        this.mostrar = false;
        this.mostrarM = false;
    }
    ngOnInit() {
        this.getTicketsAsignados();
    }
    doRefreshAsig(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.mostrar = false;
            this.getTicketsAsignados().then(() => {
                event.target.complete();
            });
        });
    }
    doRefreshMis(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.mostrarM = false;
            this.getMisTickets().then(() => {
                event.target.complete();
            });
        });
    }
    doRefreshDash(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.cardSkeleton = false;
            this.getConteoTickets().then(() => {
                event.target.complete();
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    getConteoTickets() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.cardSkeleton = true;
            (yield this.bpmService.conteoTickets(this.fini, this.ffin, this.sede)).subscribe((resp) => {
                if (resp.status) {
                    this.conteoTickets = resp.data;
                    console.log(resp);
                    setTimeout(() => {
                        this.conteoTickets.forEach(element => {
                            element.color = 'background: ' + element.color;
                        });
                        this.cardSkeleton = false;
                    }, 500);
                }
                else {
                    this.alertService.presentAlert(resp.data.msg);
                }
            });
        });
    }
    logOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.navController.navigateRoot('/login');
            this.storage.clear();
        });
    }
    getDate() {
        let todayDate;
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        todayDate = dd + '/' + mm + '/' + yyyy;
        return todayDate;
    }
    getHour() {
        const hoy = new Date();
        const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        return hora;
    }
    getListadoPorStatus(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            (yield this.bpmService.listadoTickets(status, this.finiC, this.ffinA, this.sede)).subscribe((resp) => {
                if (resp.status) {
                    const listadoPorStatus = resp.data;
                    this.presentModalListado(listadoPorStatus);
                }
                else {
                    this.loadingController.dismiss();
                    this.alertService.presentAlert(resp.data.msg);
                }
            });
        });
    }
    presentModalListado(listadoPorStatus) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _listado_listado_page__WEBPACK_IMPORTED_MODULE_4__.ListadoPage,
                backdropDismiss: false,
                componentProps: { listadoPorStatus }
            });
            yield modal.present();
        });
    }
    segmentChanged(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (ev.detail.value === 'mis tickets') {
                this.mostrarM = yield false;
                this.mis = true;
                this.asignados = false;
                this.dash = false;
                this.getMisTickets();
            }
            else if (ev.detail.value === 'dashboard') {
                this.cardSkeleton = yield false;
                this.mis = false;
                this.asignados = false;
                this.dash = true;
                this.getConteoTickets();
            }
            else {
                this.mostrar = yield false;
                this.mis = false;
                this.asignados = true;
                this.dash = false;
                this.getTicketsAsignados();
            }
        });
    }
    getTicketsAsignados() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line max-len
            yield (yield this.bpmService.getTicketsAsignados(this.status, this.finiC, this.ffinA, this.prioridad, this.incidentes, this.categoria)).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.status) {
                    console.log(resp);
                    this.ticketsAsignados = resp.data;
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                        this.mostrar = yield true;
                    }), 500);
                }
                else {
                    this.alertService.presentAlert(resp.data.msg);
                }
            }));
        });
    }
    getMisTickets() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line max-len
            yield (yield this.bpmService.getMisTickets(this.status, this.finiC, this.ffinA, this.prioridad, this.incidentes, this.categoria)).subscribe((resp) => {
                if (resp.status) {
                    console.log(resp);
                    this.misTickets = resp.data;
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                        this.mostrarM = yield true;
                    }), 500);
                }
                else {
                    this.alertService.presentAlert(resp.data.msg);
                }
            });
        });
    }
    getTicket(codigo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            (yield this.bpmService.getTicket(codigo)).subscribe((resp) => {
                if (resp.status) {
                    const ticket = resp.data;
                    this.presentModalTicket(ticket);
                }
                else {
                    this.loadingController.dismiss();
                    this.alertService.presentAlert('Ha ocurrido un error, intente de nuevo más tarde.');
                }
            });
        });
    }
    presentModalTicket(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _tramite_ticket_tramite_ticket_page__WEBPACK_IMPORTED_MODULE_6__.TramiteTicketPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
        });
    }
    getMisTicket(codigo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            (yield this.bpmService.getTicket(codigo)).subscribe((resp) => {
                if (resp.status) {
                    const ticket = resp.data;
                    this.presentModalTicketPage(ticket);
                }
                else {
                    this.loadingController.dismiss();
                    this.alertService.presentAlert('Ha ocurrido un error, intente de nuevo más tarde.');
                }
            });
        });
    }
    presentModalTicketPage(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ticket_ticket_page__WEBPACK_IMPORTED_MODULE_5__.TicketPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
        });
    }
    presentModalFiltros() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            const modal = yield this.modalController.create({
                component: _filtros_filtros_page__WEBPACK_IMPORTED_MODULE_7__.FiltrosPage,
                backdropDismiss: false
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            console.log(value);
            if (value.data) {
                this.status = yield value.data.estado;
                this.categoria = yield value.data.categoria;
                this.incidentes = yield value.data.incidente;
                this.prioridad = yield value.data.prioridad;
                this.finiC = yield value.data.desde;
                this.ffinA = yield value.data.hasta;
                if (this.asignados) {
                    yield this.getTicketsAsignados();
                    this.status = yield '';
                    this.categoria = yield '';
                    this.incidentes = yield '';
                    this.prioridad = yield '';
                    this.finiC = yield '';
                    this.ffinA = yield '';
                }
                else if (this.mis) {
                    this.getMisTickets();
                    this.status = yield '';
                    this.categoria = yield '';
                    this.incidentes = yield '';
                    this.prioridad = yield '';
                    this.finiC = yield '';
                    this.ffinA = yield '';
                }
            }
        });
    }
    presentModalFiltrosDash() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("object");
            yield this.presentLoading();
            const modal = yield this.modalController.create({
                component: _filtro_dash_filtro_dash_page__WEBPACK_IMPORTED_MODULE_8__.FiltroDashPage,
                backdropDismiss: false
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
            console.log(value);
            if (value.data) {
                this.fini = yield value.data.desde;
                this.ffin = yield value.data.hasta;
                this.sede = yield value.data.sede;
                yield this.getConteoTickets();
                this.fini = yield '';
                this.ffin = yield '';
                this.sede = yield '';
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _services_bpm_service__WEBPACK_IMPORTED_MODULE_2__.BPMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _D_FarasiSoftware_Support_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"menuId\" class=\"icon-menu\" style=\"color:#ffffff;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-icon name=\"documents\" class=\"ion-icon-toolbar\" style=\"zoom:1.7;\"></ion-icon>\n    <ion-title style=\"font-size:17px; color: #ffffff;\">Support</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"asignados\">\n    <ion-segment-button value=\"asignados\">\n      <ion-label>Asignados</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"mis tickets\">\n      <ion-label>Mis tickets</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"dashboard\">\n      <ion-label>Dashboard</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"menuId\" contentId=\"main\" mode=\"md\">\n  <ion-header>\n    <ion-toolbar class=\"menu\">\n      <img src=\"../../assets/img/logo.png\" width=\"72%\" slot=\"start\" class=\"img\" style=\"margin-left: 42px;\">\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"menu-content\">\n    <ion-menu-toggle>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/\">\n            <ion-icon name=\"home\" slot=\"start\" style=\"color:#66615B; zoom: 1.2;\"></ion-icon>\n            <ion-label style=\"font-size: 18px;\">Inicio</ion-label>\n          </ion-item>\n          <ion-item routerLink=\"/perfil\">\n            <ion-icon name=\"person-circle\" slot=\"start\" style=\"color:#66615B; zoom: 1.2;\"></ion-icon>\n            <ion-label>Perfil</ion-label>\n          </ion-item>\n          <ion-item routerLink=\"/reset-password\">\n            <ion-icon name=\"lock-closed\" slot=\"start\" style=\"color:#66615B; zoom: 1.2;\"></ion-icon>\n            <ion-label style=\"font-size: 18px;\">Seguridad y Contraseña</ion-label>\n          </ion-item>\n          <ion-item routerLink=\"/reset-password\">\n            <ion-icon name=\"key\" slot=\"start\" style=\"color:#66615B; zoom: 1.2;\"></ion-icon>\n            <ion-label style=\"font-size: 18px;\">Token</ion-label>\n          </ion-item>\n          <ion-item routerLink=\"/nuevo\">\n            <ion-icon name=\"add\" slot=\"start\" style=\"color:#66615B; zoom: 1.2;\"></ion-icon>\n            <ion-label style=\"font-size: 18px;\">Nuevo ticket</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-menu-toggle>\n  </ion-content>\n  <ion-footer>\n    <ion-menu-toggle>\n      <ion-toolbar>\n        <ion-buttons slot=\"end\" mode=\"ios\" class=\"item-padding-salir\">\n          <ion-button color=\"dark\" (click)=\"logOut()\">\n            <ion-icon slot=\"start\" name=\"log-out-outline\" class=\"icon-menu\" style=\"color:#ffffff; zoom: 1.2;\"></ion-icon>\n            <ion-note color=\"light\" style=\"font-size: 20px;\">Salir</ion-note>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-menu-toggle>\n  </ion-footer>\n</ion-menu>\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"medium\" class=\"width\">\n    <ion-icon name=\"apps\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"top\">  \n    <ion-fab-button routerLink=\"/reset-password\" color=\"medium\" class=\"width\" style=\"zoom: 1.3;\">\n      <ion-icon name=\"lock-closed\" style=\"zoom:1.2;\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button routerLink=\"/perfil\" color=\"medium\" class=\"width\" style=\"zoom: 1.3;\">\n      <ion-icon name=\"person-circle\" style=\"zoom:1.2;\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button routerLink=\"/perfil\" color=\"medium\" class=\"width\" style=\"zoom: 1.3;\">\n      <ion-icon name=\"key\" style=\"zoom:1.2;\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button routerLink=\"/nuevo\" color=\"medium\" class=\"width\" style=\"zoom: 1.3;\">\n      <ion-icon name=\"add\" style=\"zoom:1.2;\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n<!-- //////////////////////////////////////////////////////// -->\n\n<ion-content *ngIf=\"dash\">\n\n  <div>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshDash($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  </div>\n  <ion-row class=\"row-refresh\">\n    <ion-col size=\"12\" class=\"center\">\n        <p style=\"color: rgb(180, 180, 180);\"><ion-icon name=\"arrow-down-outline\" style=\"zoom:0.9;\" class=\"ion-icon-refresh\" slot=\"start\"></ion-icon>\n          Desliza para recargar\n          <ion-icon name=\"arrow-down-outline\" style=\"zoom:0.9;\" class=\"ion-icon-refresh\" slot=\"end\"></ion-icon></p>\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-list>\n    <ion-list-header> \n      <ion-col size=\"7.5\">\n        Tickets\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" fill=\"outline\" style=\"margin-bottom: -10px; padding: 6px;\" (click)=\"presentModalFiltrosDash()\">\n          Filtros\n        <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"0.5\">\n      </ion-col>\n  </ion-list-header>\n  </ion-list>\n\n  <div *ngIf=\"cardSkeleton\">\n    <ion-list style=\"margin-top: 30px;\">\n    <ion-item *ngFor=\"let cards of skeletonScreen\" lines=\"none\">\n      <ion-col size=\"2\">\n          <ion-skeleton-text animated style=\"height: 50px; border-radius: 25px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col size=\"10\">\n        <h2>\n          <ion-skeleton-text animated style=\"width: 45%\"></ion-skeleton-text>\n        </h2>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 8%\"></ion-skeleton-text>\n        </h3>\n      </ion-col>\n    </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"!cardSkeleton\">\n    <ion-list style=\"margin-top: 20px;\">\n    <br>\n      <ion-item *ngFor=\"let ticket of conteoTickets\" class=\"animate__animated animate__fadeInUp\" (click)=\"getListadoPorStatus(ticket.codigo)\" style=\"margin-bottom: 9px;\n      border-radius: 15px;\n      --background: #f9f9f9;\n      margin-left: 10px;\n      margin-right: 10px;\" lines=\"none\">\n        <ion-avatar slot=\"start\" [style]=\" ticket.color\">\n        </ion-avatar>\n        <ion-label>\n          <header>{{ticket.nombre}} </header>\n          <h3 style=\"font-weight: 550;\">{{ticket.cantidad}}</h3>\n        </ion-label>\n        <ion-icon slot=\"end\" name=\"clipboard-outline\"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<!-- //////////////////////////////////////////////////////// -->\n\n<ion-content *ngIf=\"mis\">\n\n  <div>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshMis($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  </div>\n  <ion-row class=\"row-refresh\">\n    <ion-col size=\"12\" class=\"center\">\n        <p style=\"color: rgb(180, 180, 180);\"><ion-icon name=\"arrow-down-outline\" style=\"zoom:0.9;\" class=\"ion-icon-refresh\" slot=\"start\"></ion-icon>\n          Desliza para recargar\n          <ion-icon name=\"arrow-down-outline\" style=\"zoom:0.9;\" class=\"ion-icon-refresh\" slot=\"end\"></ion-icon></p>\n    </ion-col>\n  </ion-row>\n\n  <ion-list style=\"margin-top: 20px;\">\n    <ion-list-header> \n        <ion-col size=\"7.5\">\n          Tickets\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" fill=\"outline\" style=\"margin-bottom: -10px; padding: 6px;\" (click)=\"presentModalFiltros()\">\n            Filtros\n          <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"0.5\">\n        </ion-col>\n    </ion-list-header>\n  </ion-list>\n\n  <div *ngIf=\"mostrarM\" >\n    <ion-card *ngFor=\"let item of misTickets\" (click)=\"getMisTicket(item.codigo)\"  class=\"ion-activatable animate__animated animate__bounceInLeft\">\n      <ion-card-header>\n        <ion-card-subtitle>{{item.categoria}}</ion-card-subtitle>\n        <ion-card-title style=\"font-size: 22px;\">#{{item.codigo}} | {{item.incidente}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"4.2\">\n              <ion-badge class=\"badge\">Fecha/ Hora :</ion-badge>\n            </ion-col>\n            <ion-col size=\"7.8\">\n              <ion-text>\n                <h3 class=\"descripcion\">{{item.fecha}}</h3>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3.5\">\n              <ion-badge class=\"badge\">Prioridad :</ion-badge>\n            </ion-col>\n            <ion-col size=\"8.5\">\n              <ion-text>\n                <h3 class=\"descripcion\">{{item.prioridad}}</h3>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3.5\">\n              <ion-badge class=\"badge\">Situación :</ion-badge>\n            </ion-col>\n            <ion-col size=\"8.5\">\n              <ion-text>\n                <h3 class=\"descripcion\">{{item.status}}</h3>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-card>\n  </div> \n\n  <div *ngIf=\"!mostrarM\" >\n    <ion-card *ngFor=\"let cards of skeletonScreen\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <ion-skeleton-text animated style=\"width: 27%\"></ion-skeleton-text>\n        </ion-card-subtitle>\n        <ion-card-title>\n          <ion-skeleton-text animated style=\"width: 40%\" class=\"skeleton-tittle\"></ion-skeleton-text>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-skeleton-text animated class=\"skeleton-badge\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"10\">\n              <ion-text>\n                <ion-skeleton-text animated style=\"width: 65%\"></ion-skeleton-text>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2.5\">\n              <ion-skeleton-text animated class=\"skeleton-badge\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"9.5\">\n              <ion-text>\n                <ion-skeleton-text animated style=\"width: 85%\"></ion-skeleton-text>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2.5\">\n              <ion-skeleton-text animated class=\"skeleton-badge\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"9.5\">\n              <ion-text>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<!-- //////////////////////////////////////////////////////// -->\n\n<ion-content *ngIf=\"asignados\">\n\n  <div>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshAsig($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  </div>\n  <ion-row class=\"row-refresh\">\n    <ion-col size=\"12\" class=\"center\">\n        <p style=\"color: rgb(180, 180, 180);\"><ion-icon name=\"arrow-down-outline\" style=\"zoom:0.9;\" class=\"ion-icon-refresh\" slot=\"start\"></ion-icon>\n          Desliza para recargar\n          <ion-icon name=\"arrow-down-outline\" style=\"zoom:0.9;\" class=\"ion-icon-refresh\" slot=\"end\"></ion-icon></p>\n    </ion-col>\n  </ion-row>\n\n\n    <ion-list style=\"margin-top: 20px;\">\n      <ion-list-header> \n          <ion-col size=\"7.5\">\n            Tickets\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button expand=\"block\" fill=\"outline\" style=\"margin-bottom: -10px; padding: 6px;\" (click)=\"presentModalFiltros()\">\n              Filtros\n            <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"0.5\">\n          </ion-col>\n      </ion-list-header>\n    </ion-list>\n\n  <div *ngIf=\"!mostrar\" >\n    <ion-card *ngFor=\"let cards of skeletonScreen\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <ion-skeleton-text animated style=\"width: 27%\"></ion-skeleton-text>\n        </ion-card-subtitle>\n        <ion-card-title>\n          <ion-skeleton-text animated style=\"width: 40%\" class=\"skeleton-tittle\"></ion-skeleton-text>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-skeleton-text animated class=\"skeleton-badge\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"10\">\n              <ion-text>\n                <ion-skeleton-text animated style=\"width: 65%\"></ion-skeleton-text>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2.5\">\n              <ion-skeleton-text animated class=\"skeleton-badge\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"9.5\">\n              <ion-text>\n                <ion-skeleton-text animated style=\"width: 85%\"></ion-skeleton-text>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2.5\">\n              <ion-skeleton-text animated class=\"skeleton-badge\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"9.5\">\n              <ion-text>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"mostrar\" >\n    <ion-card *ngFor=\"let item of ticketsAsignados\" (click)=\"getTicket(item.codigo)\" class=\"ion-activatable animate__animated animate__bounceInLeft\">\n      <ion-card-header>\n        <ion-card-subtitle>{{item.categoria}}</ion-card-subtitle>\n        <ion-card-title style=\"font-size: 22px;\">#{{item.codigo}} | {{item.incidente}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"4.2\">\n              <ion-badge class=\"badge\">Fecha/ Hora :</ion-badge>\n            </ion-col>\n            <ion-col size=\"7.8\">\n              <ion-text>\n                <h3 class=\"descripcion\">{{item.fecha}}</h3>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3.5\">\n              <ion-badge class=\"badge\">Prioridad :</ion-badge>\n            </ion-col>\n            <ion-col size=\"8.5\">\n              <ion-text>\n                <h3 class=\"descripcion\">{{item.prioridad}}</h3>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3.5\">\n              <ion-badge class=\"badge\">Situación :</ion-badge>\n            </ion-col>\n            <ion-col size=\"8.5\">\n              <ion-text>\n                <h3 class=\"descripcion\">{{item.status}}</h3>\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-card>\n  </div> \n  \n</ion-content>");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n\n.ion-icon {\n  margin-left: 23%;\n  color: #3197f7;\n}\n\n.ion-icon-toolbar {\n  margin-left: 23%;\n}\n\n.row-refresh {\n  margin-bottom: -8%;\n  margin-top: -3%;\n}\n\n.center {\n  text-align: center;\n}\n\n.ion-icon-refresh {\n  color: #b4b4b4;\n}\n\nheader {\n  font-size: 16px;\n  font-weight: 550;\n  letter-spacing: 0.02em;\n}\n\n.badge {\n  background-color: #4c4c4a;\n}\n\n.skeleton-badge {\n  line-height: 13px;\n  --border-radius: 80px;\n  height: 60%;\n}\n\n.skeleton-tittle {\n  height: 120%;\n  line-height: 20px;\n  margin-top: 4%;\n}\n\n.menu {\n  --background: #F2F3F4;\n  color: white;\n  padding: 4% 4% 4% 4%;\n}\n\n.menu-content {\n  --background: #F2F3F4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiAgLmlvbi1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMjMlO1xuICAgIGNvbG9yOiAjMzE5N2Y3O1xufVxuXG4uaW9uLWljb24tdG9vbGJhciB7XG4gIG1hcmdpbi1sZWZ0OiAyMyU7XG59XG5cbi5yb3ctcmVmcmVzaHtcbiAgbWFyZ2luLWJvdHRvbTogLTglO1xuICBtYXJnaW4tdG9wOiAtMyU7XG59XG5cbi5jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlvbi1pY29uLXJlZnJlc2gge1xuICBjb2xvcjogcmdiKDE4MCwgMTgwLCAxODApO1xufVxuXG5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uYmFkZ2V7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzRjNGE7XG59XG5cbi5za2VsZXRvbi1iYWRnZSB7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAtLWJvcmRlci1yYWRpdXM6IDgwcHg7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uc2tlbGV0b24tdGl0dGxlIHtcbiAgaGVpZ2h0OiAxMjAlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi5tZW51e1xuICAtLWJhY2tncm91bmQ6ICNGMkYzRjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNCUgNCUgNCUgNCU7XG59XG5cbi5tZW51LWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogI0YyRjNGNDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map