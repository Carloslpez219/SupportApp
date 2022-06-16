"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 6786:
/*!*******************************************!*\
  !*** ./src/app/Services/alert.service.ts ***!
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

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/user.service */ 8404);
/* harmony import */ var _Services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/alert.service */ 6786);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 1614);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/push-notifications */ 6727);










let LoginPage = class LoginPage {
    constructor(popoverCtrl, navCtrl, userService, alertService, loadingController, device) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.device = device;
        this.sliderOpts = {
            allowSlidePrev: false,
            allowSlideNext: false
        };
        this.loginForm = this.createFormGroup();
    }
    get nombre() { return this.loginForm.get('nombre'); }
    get password() { return this.loginForm.get('password'); }
    ngOnInit() { }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const valid = yield this.userService.login(this.loginForm.value.nombre, this.loginForm.value.password);
            if (valid) {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.requestPermissions().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    if (result.receive === 'granted') {
                        yield this.registro();
                        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.register();
                    }
                    else {
                        // Show some error
                    }
                }));
                yield this.loadingController.dismiss();
                this.navCtrl.navigateRoot('/', { animated: true });
            }
            else {
                this.loadingController.dismiss();
                const message = 'Usuario y/o Contraseña son incorrectos';
                this.alertService.presentToast(message, 'danger', 2500);
                this.loginForm.reset();
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Cargando...'
            });
            yield loading.present();
        });
    }
    registro() {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.addListener('registration', (token) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(token);
            (yield this.userService.registro(this.device.uuid, token, this.device.platform)).subscribe(resp => {
                console.log(resp);
            });
        }));
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _Services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _D_Farasi_Software_SupportApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"header\">\r\n    </div>\r\n    <ion-card class=\"body animate__animated animate__bounceInDown\">\r\n      <div class=\"img\">\r\n        <img src=\"../../../assets/img/logo.png\" class=\"animate__animated animate__bounce\">\r\n      </div>\r\n      <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\r\n        <ion-list>\r\n          <ion-item mode=\"md\">\r\n            <ion-icon slot=\"start\" name=\"person-circle-outline\"></ion-icon>\r\n            <ion-input placeholder=\"User\" type=\"name\" clearOnEdit=\"true\" clearInput formControlName=\"nombre\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div class=\"errors\" *ngIf=\"nombre.invalid && (nombre.dirty || nombre.touched)\">\r\n            <span *ngIf=\"nombre.errors.required\">\r\n              <ion-label class=\"error-container\">This field is required</ion-label>\r\n            </span>\r\n          </div>\r\n          <ion-item mode=\"md\">\r\n            <ion-icon slot=\"start\" name=\"lock-open\"></ion-icon>\r\n            <ion-input placeholder=\"Password\" type=\"password\" clearOnEdit=\"true\" clearInput formControlName=\"password\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <div class=\"errors\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n            <span *ngIf=\"password.errors.required\">\r\n              <ion-label class=\"error-container\">This field is required</ion-label>\r\n            </span>\r\n          </div>\r\n        </ion-list>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button expand=\"block\" class=\"button-1\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login\r\n                <ion-icon slot=\"start\" color=\"white\" name=\"enter-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:linear-gradient(\n      rgba(0, 0, 0, 0.1),\n      rgba(0, 0, 0, 0.1)\n      ), url('fondo.jpeg') no-repeat center center / cover;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  flex: 1;\n  justify-content: center;\n  text-align: center;\n  padding-top: 10%;\n  padding-bottom: 70px;\n}\n\n.img {\n  height: 67%;\n  width: 67%;\n  margin-left: 17%;\n}\n\n.body {\n  padding-top: 6%;\n  padding-bottom: 6%;\n  padding-right: 3%;\n  padding-left: 3%;\n  background-color: #FFF;\n}\n\nion-item {\n  --border-color: transparent !important;\n  --background: #f3f3f3;\n  border-radius: 14px;\n  margin-bottom: 14px;\n  margin-top: 1px;\n}\n\nion-icon {\n  color: #E74C3C;\n}\n\nion-input {\n  --color: black;\n}\n\nion-list {\n  background-color: #FFF;\n  padding-top: 2%;\n}\n\n.button-1 {\n  --background:#2D383F;\n  margin-top: 10%;\n}\n\nion-toolbar {\n  --background: white;\n}\n\n.icono {\n  color: white;\n}\n\nion-title {\n  color: #E74C3C;\n}\n\n.error-container {\n  color: #66615B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7MERBQUE7QUFJSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFSTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVJO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdJO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0k7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHSTtFQUNJLGNBQUE7QUFBUjs7QUFHSTtFQUNBLGNBQUE7QUFBSjs7QUFHSTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdJO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0k7RUFDQSxtQkFBQTtBQUFKOztBQUdJO0VBQ0EsWUFBQTtBQUFKOztBQUdJO0VBQ0EsY0FBQTtBQUFKOztBQUdJO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudChcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEpXHJcbiAgICAgICAgKSwgdXJsKCcuLi8uLi9hc3NldHMvaW1nL2ZvbmRvLmpwZWcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVhZGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltZyB7XHJcbiAgICBoZWlnaHQ6IDY3JTtcclxuICAgIHdpZHRoOiA2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLmJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDYlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjRTc0QzNDO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b24tMXtcclxuICAgIC0tYmFja2dyb3VuZDojMkQzODNGO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaWNvbm97XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjRTc0QzNDO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXJyb3ItY29udGFpbmVye1xyXG4gICAgY29sb3I6ICM2NjYxNUI7XHJcbiAgICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map