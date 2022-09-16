"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_ticket_ticket_page_ts"],{

/***/ 6412:
/*!***************************************!*\
  !*** ./src/app/ticket/ticket.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPage": () => (/* binding */ TicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ticket.page.html */ 5513);
/* harmony import */ var _ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.page.scss */ 6535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _editar_ticket_editar_ticket_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editar-ticket/editar-ticket.page */ 3950);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ 4571);








let TicketPage = class TicketPage {
    constructor(loadingController, modalController, sanitizer, alertService) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.alertService = alertService;
        this.viewEntered = false;
    }
    ngOnInit() {
        console.log(this.ticket);
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
    editar(ticket) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const modal = yield this.modalController.create({
                component: _editar_ticket_editar_ticket_page__WEBPACK_IMPORTED_MODULE_2__.EditarTicketPage,
                backdropDismiss: false,
                componentProps: { ticket }
            });
            yield modal.present();
            const value = yield modal.onDidDismiss();
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    verpdf(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
};
TicketPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
TicketPage.propDecorators = {
    ticket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
TicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ticket',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ticket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ticket_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketPage);



/***/ }),

/***/ 5513:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ticket/ticket.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInDown\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\" color=\"light\">Atrás\r\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"viewEntered\" class=\"animate__animated animate__fadeInUp\">\r\n\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6.5\">\r\n      <ion-card style=\"background-color: #f0f0f0; margin-top: 15px; margin-bottom: 10px; height: 80%;\">\r\n        <ion-card-subtitle class=\"ion-margin\">Status actual:</ion-card-subtitle>\r\n        <h2 style=\"color: cornflowerblue\" class=\"ion-margin\">{{ticket.estatus}}</h2>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"5.5\">\r\n      <ion-button expand=\"block\" style=\"--background: #2D383F; margin-top: 35px;\" (click)=\"editar(ticket)\"><b>Editar</b></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Sede: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sede}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Área: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.area}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Categoría: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.categoria}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Prioridad: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.prioridad}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Tiempo en espera o Hold on: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.espera}}</ion-label></div>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Sector: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.sector}}</ion-label></div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n        <ion-label>Nivel: </ion-label>\r\n      </ion-item-divider>\r\n      <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.nivel}}</ion-label></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Incidente: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.incidente}}</ion-label></div>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\">\r\n    <ion-label>Descripción: </ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"margin\"><ion-label style=\"font-size: 17px;\">{{ticket.descripcion}}</ion-label></div>\r\n  <ion-item-divider style=\"background-color: #f0f0f0; border-radius: 10px;\" *ngIf=\"ticket.fotos.length !== 0\">\r\n    <ion-label>Archivos por status: </ion-label>\r\n  </ion-item-divider>\r\n\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide *ngFor=\"let item of ticket.fotos\">\r\n      <ion-card style=\"background-color: #f0f0f0; width: 90%;\" (click)=\"verpdf(item.foto)\">\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <ion-badge class=\"badge\">Fecha/ Hora :</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-text>\r\n                {{item.fecha_reg}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n            <img src=\"../../assets/img/PDF.png\" style=\"height: 90px;\"/>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <button class=\"accordion\" (click)=\"acordeon()\" *ngIf=\"ticket.asignacion.length !== 0\"><ion-label style=\"background-color: #f0f0f0; border-radius: 10px; font-size: 17px; font-weight: bolder;\">Usuarios asignados: </ion-label></button>\r\n  <div class=\"panel\">\r\n\r\n        <ion-card style=\"background-color: #f0f0f0; width: 90%;\" *ngFor=\"let item of ticket.asignacion\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"3.5\">\r\n                <ion-badge class=\"badge\">Nombre :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"8.5\">\r\n                <ion-text>\r\n                  {{item.nombre}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n  </div>\r\n\r\n  <button class=\"accordion\" (click)=\"acordeon()\" *ngIf=\"ticket.asignacion.length !== 0\"><ion-label style=\"background-color: #f0f0f0; border-radius: 10px; font-size: 17px; font-weight: bolder;\">Bitácora: </ion-label></button>\r\n  <div class=\"panel\">\r\n        <ion-card style=\"background-color: #f0f0f0; width: 90%;\" *ngFor=\"let item of ticket.bitacora\">\r\n          <ion-card-content>\r\n            <ion-row>\r\n              <ion-col size=\"3.2\">\r\n                <ion-badge class=\"badge\">Acción :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"8.8\">\r\n                <ion-text>\r\n                  {{item.descripcion}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4.2\">\r\n                <ion-badge class=\"badge\">Fecha/Hora :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"7.8\">\r\n                <ion-text>\r\n                  {{item.fecha_reg}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5.5\">\r\n                <ion-badge class=\"badge\">Observaciones :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"6.5\">\r\n                <ion-text>\r\n                  {{item.observacion}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"3.5\">\r\n                <ion-badge class=\"badge\">Usuario :</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"8.5\">\r\n                <ion-text>\r\n                  {{item.nombre}}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card-content>\r\n        </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 6535:
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.margin {\n  margin-left: 21px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\nion-slides {\n  --bullet-background: rgb(59, 59, 59);\n  --bullet-background-active: black;\n}\n.badge {\n  background-color: #4c4c4a;\n}\nion-toolbar {\n  --background: #66615B;\n  --color: white;\n}\n/* Style the buttons that are used to open and close the accordion panel */\n.accordion {\n  background-color: #eee;\n  color: black;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: none;\n  outline: none;\n  transition: 0.4s;\n}\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n.active, .accordion:hover {\n  background-color: #f0f0f0;\n}\n/* Style the accordion panel. Note: hidden by default */\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n.accordion:after {\n  content: \"➕\";\n  /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: #f0f0f0;\n  float: right;\n  margin-left: 5px;\n}\n.active:after {\n  content: \"➖\";\n  /* Unicode character for \"minus\" sign (-) */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0E7RUFDSSxvQ0FBQTtFQUNBLGlDQUFBO0FBRUo7QUFDQTtFQUNJLHlCQUFBO0FBRUo7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBRUUsMEVBQUE7QUFDRjtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUEsMElBQUE7QUFDQTtFQUNFLHlCQUFBO0FBQ0Y7QUFFQSx1REFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUFtQiwwQ0FBQTtFQUNuQixlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQWtCLDJDQUFBO0FBR3BCIiwiZmlsZSI6InRpY2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJnYig1OSwgNTksIDU5KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGJsYWNrO1xufVxuXG4uYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM0YzRhO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY2NjE1QjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiBhbmQgY2xvc2UgdGhlIGFjY29yZGlvbiBwYW5lbCAqL1xuLmFjY29yZGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBidXR0b24gaWYgaXQgaXMgY2xpY2tlZCBvbiAoYWRkIHRoZSAuYWN0aXZlIGNsYXNzIHdpdGggSlMpLCBhbmQgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciBpdCAoaG92ZXIpICovXG4uYWN0aXZlLCAuYWNjb3JkaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLyogU3R5bGUgdGhlIGFjY29yZGlvbiBwYW5lbC4gTm90ZTogaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi5wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLmFjY29yZGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p6VXCI7XG4gIC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcInBsdXNcIiBzaWduICgrKSAqL1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKellwiO1xuICAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXCJtaW51c1wiIHNpZ24gKC0pICovXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_ticket_ticket_page_ts.js.map