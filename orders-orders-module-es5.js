(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customers view indent\">\n <div class=\"container\">\n     <header>\n         <h3>\n             <span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp;&nbsp;Orders\n         </h3>\n     </header>\n     <br />\n\n     <div class=\"container\">\n         <div *ngIf=\"customers\">\n\n             <div class=\"row\" *ngFor=\"let customer of customers\">\n                 <h4>{{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n                 <br />\n                 <table *ngIf=\"customer.orders && customer.orders.length\" class=\"table table-striped table-hover orders-table\">\n                     <tr *ngFor=\"let order of customer.orders\">\n                         <td>{{ order.productName }}</td>\n                         <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \n                     </tr>\n                     <tr class=\"summary-border\">\n                         <td>&nbsp;</td>\n                         <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}\n                     </tr>\n                 </table>\n                 <div *ngIf=\"!customer.orders || !customer.orders.length\">\n                     No orders found\n                 </div> \n             </div>\n\n             <pagination-tab (pageChanged)=\"pageChanged($event)\"\n              [pageSize]=\"pageSize\"\n               [totalItems]=\"totalRecord\"></pagination-tab>\n\n         </div>\n         <div *ngIf=\"!customers\">\n             No customers found\n         </div>\n     </div>\n\n </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/orders/orders-routing.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/orders/orders-routing.module.ts ***!
          \*************************************************/
        /*! exports provided: OrdersRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () { return OrdersRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");
            var routes = [
                { path: '', component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] }
            ];
            var OrdersRoutingModule = /** @class */ (function () {
                function OrdersRoutingModule() {
                }
                return OrdersRoutingModule;
            }());
            OrdersRoutingModule.components = [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]];
            OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], OrdersRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/orders/orders.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/orders/orders.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/orders/orders.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/orders/orders.component.ts ***!
          \********************************************/
        /*! exports provided: OrdersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () { return OrdersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
            var OrdersComponent = /** @class */ (function () {
                function OrdersComponent(dataService) {
                    this.dataService = dataService;
                    this.totalRecord = 0;
                    this.pageSize = 5;
                }
                OrdersComponent.prototype.ngOnInit = function () {
                    this.getCustomersPage(1);
                };
                OrdersComponent.prototype.pageChanged = function (page) {
                    this.getCustomersPage(page);
                };
                OrdersComponent.prototype.getCustomersPage = function (page) {
                    var _this = this;
                    this.dataService.getCustomersPageOne((page - 1) * this.pageSize, this.pageSize * page)
                        .subscribe(function (customers) {
                        _this.customers = customers.results;
                        _this.totalRecord = customers.totalRecord;
                    });
                };
                return OrdersComponent;
            }());
            OrdersComponent.ctorParameters = function () { return [
                { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-orders',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")).default]
                })
            ], OrdersComponent);
            /***/ 
        }),
        /***/ "./src/app/orders/orders.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/orders/orders.module.ts ***!
          \*****************************************/
        /*! exports provided: OrdersModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function () { return OrdersModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var OrdersModule = /** @class */ (function () {
                function OrdersModule() {
                }
                return OrdersModule;
            }());
            OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                    declarations: [_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"].components]
                })
            ], OrdersModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=orders-orders-module-es2015.js.map
//# sourceMappingURL=orders-orders-module-es5.js.map
//# sourceMappingURL=orders-orders-module-es5.js.map