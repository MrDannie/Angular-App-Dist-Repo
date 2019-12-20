(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-card/customers-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-card/customers-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n <div class=\"row card-container\">\r\n     <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let customer of customers\" >\r\n         <div class=\"card\">\r\n             <div class=\"card-header\">\r\n                 <a [routerLink]=\"['/customers', customer.id, 'details']\" class=\"white\">\r\n                     {{customer.firstName | capitalize }} {{ customer.lastName | capitalize }} \r\n                 </a>\r\n                 <a [routerLink]=\"['/customers', customer.id, 'edit']\">\r\n                     <i title=\"Edit\"  \r\n                        class=\"pull-right glyphicon glyphicon-edit edit-icon white\"></i>\r\n                 </a>\r\n             </div>\r\n             <div class=\"card-body\">\r\n                 <div class=\"clearfix\">\r\n                     <div class=\"pull-left card-body-left\">\r\n                         <a href=\"#\" class=\"white\">\r\n                             <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"card-image\" />\r\n                         </a>\r\n                     </div>\r\n                     <div class=\"pull-left card-body-right\">\r\n                         <div class=\"card-body-content\">{{customer.city | trim }}, {{customer.state.name}}</div>\r\n                         <a [routerLink]=\"['/customers', customer.id, 'orders']\">View Orders</a>\r\n                     </div>\r\n                 </div>\r\n             </div>\r\n         </div>\r\n     </div>\r\n     <div *ngIf=\"!customers.length\" >\r\n         No Records Found\r\n     </div>\r\n </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid/customers-grid.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid/customers-grid.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n <div class=\"row grid-container\">\n     <div class=\"col-md-10\">\n         <div class=\"table\">\n             <table class=\"table table-striped table-hover\">\n                 <thead>\n                     <tr>\n                         <th>&nbsp;</th>\n                         <th >First Name</th>\n                         <th >Last Name</th>\n                         <th >Address</th>\n                         <th >City</th>\n                         <th >State</th>\n                         <!-- Or you can do this directly rather than using sort-by directive -->\n                         <th >Order Total</th>\n                         <th>&nbsp;</th>\n                     </tr>\n                 </thead>\n                 <tbody *ngFor=\"let customer of customers\">\n                     <tr >\n                         <td><img src=\"assets/images/{{customer.gender | lowercase}}.png\"\n                                 class=\"grid-image\" alt=\"Customer Image\" /></td>\n                         <td><a >{{ customer.firstName | capitalize }}</a></td>\n                         <td>{{ customer.lastName | capitalize }}</td>\n                         <td>{{ customer.address }}</td>\n                         <td>{{ customer.city }}</td>\n                         <td>{{ customer.state.name }}</td>\n                         <td>{{ customer.orderTotal }}</td>\n                         <td><a>View Orders</a></td>\n                     </tr>\n                     <tr *ngIf=\"!customers.length\">\n                         <td>&nbsp;</td>\n                         <td  colspan=\"7\">No Records Found</td>\n                     </tr>\n                 </tbody>\n             </table>\n         </div>\n     </div>\n </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customers view indent\">\n  <div class=\"container\">\n      <header>\n          <h3>\n              <span class=\"glyphicon glyphicon-user\"></span>\n              {{ title }}\n          </h3>\n      </header>\n      <br />\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <div class=\"navbar\">\n                  <ul class=\"nav navbar-nav\">\n                      <li class=\"toolbar-item\">\n                          <a (click)=\"changeDisplayMode(displayModeEnum.Card)\"\n                          [class.active]=\"displayMode === displayModeEnum.Card\">\n                              <span class=\"glyphicon glyphicon-th-large\"></span> Card View\n                          </a>\n                      </li>\n                      <li class=\"toolbar-item\">\n                          <a (click)=\"changeDisplayMode(displayModeEnum.Grid)\"\n                          [class.active]=\"displayMode === displayModeEnum.Grid\">\n                              <span class=\"glyphicon glyphicon-align-justify\"></span> List View\n                          </a>\n                      </li>\n                      <li class=\"toolbar-item\">\n                          <a (click)=\"changeDisplayMode(displayModeEnum.Map)\"\n                           [class.active]=\"displayMode === displayModeEnum.Map\" >\n                              <span class=\"glyphicon glyphicon-map-marker\"></span> Map View\n                          </a>\n                      </li>\n                      <li class=\"toolbar-item\">\n                          <a [routerLink]=\"['/customers', 0, 'edit']\">\n                              <span class=\"glyphicon glyphicon-plus\"></span> New Customer\n                          </a>\n                      </li>\n                  </ul>\n                 <filter-textbox (filterAction)=\"performFilter($event)\" class=\"navbar-right\"></filter-textbox>\n              </div>\n          </div>\n        </div>  \n        <customers-card [hidden]=\"displayMode !== displayModeEnum.Card\" [customers]='filteredCustomers'></customers-card>\n        <customers-grid  [hidden]=\"displayMode !== displayModeEnum.Grid\" [customers]=\"filteredCustomers\" ></customers-grid>\n       \n        <cm-map *ngIf=\"filteredCustomers.length\" \n        [zoom]=\"2\" \n        [enabled]=\"displayMode === displayModeEnum.Map\" \n        [hidden]=\"displayMode !== displayModeEnum.Map\">\n      <cm-map-point \n        *ngFor=\"let customer of filteredCustomers\" \n        [latitude]=\"customer.latitude\" \n        [longitude]=\"customer.longitude\"\n        [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</a></h3>' + customer.city + ', ' + customer.state.name\"></cm-map-point>\n    </cm-map>\n       \n       \n       \n       \n        <pagination-tab (pageChanged)=\"pageChanged($event)\" [pageSize]=\"pageSize\" [totalItems]=\"totalRecord\" ></pagination-tab>\n        \n</div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/customers/customers-card/customers-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\r\n width:85%;\r\n}\r\n\r\n.card {\r\n background-color:#fff;\r\n border: 1px solid #d4d4d4;\r\n height:120px;\r\n margin-bottom: 20px;\r\n position: relative;\r\n}\r\n\r\n.card-header {\r\n background-color:#027FF4;\r\n font-size:14pt;\r\n color:white;\r\n padding:5px;\r\n width:100%;\r\n}\r\n\r\n.card-close {\r\n color: white;\r\n font-weight:bold;\r\n margin-right:5px;\r\n}\r\n\r\n.card-body {\r\n padding-left: 5px;\r\n}\r\n\r\n.card-body-left {\r\n margin-top: -5px;\r\n}\r\n\r\n.card-body-right {\r\n margin-left: 20px;\r\n margin-top: 2px;\r\n}\r\n\r\n.card-body-content {\r\n width: 100px;\r\n}\r\n\r\n.card-image {\r\n height:50px;width:50px;margin-top:10px;\r\n}\r\n\r\n.white {\r\n color: white;\r\n}\r\n\r\n.white:hover {\r\n color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy1jYXJkL2N1c3RvbWVycy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWU7QUFDdkM7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLWNhcmQvY3VzdG9tZXJzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiB3aWR0aDo4NSU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiBoZWlnaHQ6MTIwcHg7XHJcbiBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gYmFja2dyb3VuZC1jb2xvcjojMDI3RkY0O1xyXG4gZm9udC1zaXplOjE0cHQ7XHJcbiBjb2xvcjp3aGl0ZTtcclxuIHBhZGRpbmc6NXB4O1xyXG4gd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNhcmQtY2xvc2Uge1xyXG4gY29sb3I6IHdoaXRlO1xyXG4gZm9udC13ZWlnaHQ6Ym9sZDtcclxuIG1hcmdpbi1yaWdodDo1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHktbGVmdCB7XHJcbiBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LXJpZ2h0IHtcclxuIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LWNvbnRlbnQge1xyXG4gd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiBoZWlnaHQ6NTBweDt3aWR0aDo1MHB4O21hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLndoaXRlIHtcclxuIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndoaXRlOmhvdmVyIHtcclxuIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/customers/customers-card/customers-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersCardComponent", function() { return CustomersCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomersCardComponent = class CustomersCardComponent {
    constructor() {
        this.customers = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomersCardComponent.prototype, "customers", void 0);
CustomersCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'customers-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-card/customers-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers-card.component.css */ "./src/app/customers/customers-card/customers-card.component.css")).default]
    })
], CustomersCardComponent);



/***/ }),

/***/ "./src/app/customers/customers-grid/customers-grid.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container  div {\r\n padding-left: 0px;\r\n}\r\n\r\n.grid-container td {\r\n vertical-align: middle;\r\n}\r\n\r\n.grid-image {\r\n height:50px;width:50px;margin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy1ncmlkL2N1c3RvbWVycy1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWU7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLWdyaWQvY3VzdG9tZXJzLWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciAgZGl2IHtcclxuIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgdGQge1xyXG4gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmdyaWQtaW1hZ2Uge1xyXG4gaGVpZ2h0OjUwcHg7d2lkdGg6NTBweDttYXJnaW4tdG9wOjEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customers/customers-grid/customers-grid.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomersGridComponent = class CustomersGridComponent {
    constructor() {
        this.customers = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'customers-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid/customers-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers-grid.component.css */ "./src/app/customers/customers-grid/customers-grid.component.css")).default]
    })
], CustomersGridComponent);



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-card/customers-card.component */ "./src/app/customers/customers-card/customers-card.component.ts");
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ "./src/app/customers/customers-grid/customers-grid.component.ts");






const routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] }
];
let CustomersRoutingModule = class CustomersRoutingModule {
};
CustomersRoutingModule.components = [_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_4__["CustomersCardComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_5__["CustomersGridComponent"]];
CustomersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomersRoutingModule);



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/filter.service */ "./src/app/core/services/filter.service.ts");




let CustomersComponent = class CustomersComponent {
    constructor(dataService, filterService) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.title = "Customers";
        this.customers = [];
        this.filteredCustomers = [];
        this.page = 1;
        this.pageSize = 10;
        this.totalRecord = 0;
        this.displayModeEnum = DisplayModeEnum;
    }
    ngOnInit() {
        this.displayMode = DisplayModeEnum.Card;
        this.getCustomersPage(1);
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPageOne((page - 1) * this.pageSize, this.pageSize * page)
            .subscribe(customers => {
            this.customers = this.filteredCustomers = customers.results;
            this.totalRecord = customers.totalRecord;
        });
    }
    performFilter(filterBy) {
        let item = this.customers;
        this.filterFunction(filterBy, item);
    }
    filterFunction(filterBy, customers) {
        if (filterBy && customers) {
            filterBy = filterBy.toLocaleLowerCase();
            this.filteredCustomers = this.filterService.filter(filterBy, customers);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    }
    changeDisplayMode(mode) {
        this.displayMode = mode;
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")).default]
    })
], CustomersComponent);

var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));


/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-card/customers-card.component */ "./src/app/customers/customers-card/customers-card.component.ts");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ "./src/app/customers/customers-grid/customers-grid.component.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");








let CustomersModule = class CustomersModule {
};
CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _customers_routing_module__WEBPACK_IMPORTED_MODULE_7__["CustomersRoutingModule"]],
        declarations: [_customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__["CustomersCardComponent"], _customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_6__["CustomersGridComponent"]],
        exports: [_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__["CustomersCardComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_6__["CustomersGridComponent"]]
    })
], CustomersModule);



/***/ })

}]);
//# sourceMappingURL=customers-customers-module-es2015.js.map