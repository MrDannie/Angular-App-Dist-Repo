(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-details/customer-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-details/customer-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"customer\">\n <div class=\"row\">\n   <div class=\"col-md-2\">\n     <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"details-image\" />\n   </div>\n   <div class=\"col-md-10\">\n     <h4>    \n         {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}&nbsp;          \n     </h4>\n     <br />\n     {{ customer.address }}\n     <br />\n     {{ customer.city }}, {{ customer.state.name }}\n   </div>\n </div>    \n <br /><br />\n <div class=\"row\">\n   <div class=\"col-md-12\" *ngIf=\"customer && customer.latitude && customer.longitude\">\n     <cm-map [latitude]=\"customer.latitude\" \n          [longitude]=\"customer.longitude\" \n          [zoom]=\"10\" \n          [enabled]=\"mapEnabled\"\n          [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</h3>' + customer.city + ', ' + customer.state.name\"></cm-map>\n   </div>\n </div>\n</div>   \n<div *ngIf=\"!customer\" class=\"container\">\n  No customer found\n</div>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n <form  #customerForm=\"ngForm\" class=\"customer-form\" novalidate>\n   <div class=\"form-group\">\n     <label>First Name</label>\n     <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\n     <div class=\"alert alert-danger\" [hidden]=\"firstName.pristine || firstName.valid\">First Name is required</div>\n   </div>\n   <div class=\"form-group\">\n     <label>Last Name</label>\n     <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\n     <div class=\"alert alert-danger\" [hidden]=\"lastName.pristine || lastName.valid\">Last Name is required</div>\n   </div>\n   <div class=\"form-group\">\n     <label>Address</label>\n     <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\n     <div class=\"alert alert-danger\" [hidden]=\"address.pristine || address.valid\">Address is required</div>\n   </div>\n   <div class=\"form-group\">\n     <label>City</label>\n     <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\n     <div class=\"alert alert-danger\" [hidden]=\"city.pristine || city.valid\">City is required</div>\n   </div>\n   <div class=\"form-group\">\n     <label>State</label>\n     <select class=\"form-control\" \n             [(ngModel)]=\"customer.state.abbreviation\"\n             name=\"state\" \n             required>\n         <option *ngFor=\"let state of states\" [ngValue]=\"state.abbreviation\">{{state.name}}</option>\n     </select>\n   </div>\n   <div *ngIf=\"customer\">\n     <div class=\"alert alert-warning\" *ngIf=\"customer.id && deleteMessageEnabled\">\n        Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n        <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n     </div>\n     <button class=\"btn btn-danger\" *ngIf=\"customer.id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n     <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n       <button class=\"btn btn-default\" >Cancel</button>&nbsp;&nbsp;\n       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"customerForm.pristine || !customerForm.valid\">{{ operationText }}</button>\n     </div>\n   </div>\n   <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n </form>\n <br />\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-order/customer-order.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-order/customer-order.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n <div class=\"row\" *ngIf=\"customer && customer.orders\">\n     <h4>Orders for {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n     <br />\n     <table class=\"table table-striped table-hover orders-table\">\n         <tr *ngFor=\"let order of customer.orders\">\n             <td>{{ order.productName }}</td>\n             <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \n         </tr>\n         <tr class=\"summary-border\">\n             <td>&nbsp;</td>\n             <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\n         </tr>\n     </table>\n </div>\n <div *ngIf=\"customer && !customer.orders\" class=\"row\">\n     No orders found\n </div> \n <div *ngIf=\"!customer\" class=\"row\">\n     No customer found\n </div>  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"orders view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Customer Information</h3>\n        </header>\n        <br />\n        <div class=\"navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"details\" routerLinkActive=\"active\">\n                       <span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Customer Details\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"orders\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-tags\"></span>&nbsp;&nbsp;Customer Orders\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"edit\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>&nbsp;&nbsp;Edit Customer\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n            <br />\n            <br />\n            <a routerLink=\"/customers\">View all Customers</a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details-image {\r\n height:100px;width:100px;margin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWU7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWltYWdlIHtcclxuIGhlaWdodDoxMDBweDt3aWR0aDoxMDBweDttYXJnaW4tdG9wOjEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/data.service */ "./src/app/core/services/data.service.ts");




let CustomerDetailsComponent = class CustomerDetailsComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            console.log(id);
            if (id) {
                this.dataService.getCustomer(id)
                    .subscribe((customer) => {
                    this.customer = customer;
                    console.log(customer);
                    this.mapEnabled = true;
                });
            }
        });
    }
};
CustomerDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-details/customer-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer/customer-details/customer-details.component.css")).default]
    })
], CustomerDetailsComponent);



/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".customer-form input[type='text'], \r\n.customer-form input[type='number'],\r\n.customer-form input[type='email'],\r\n.customer-form select {\r\n    width:100%;\r\n}\r\n\r\n.customer-form .ng-invalid {\r\n  border-left: 5px solid #a94442;\r\n}\r\n\r\n.customer-form .ng-valid {\r\n  border-left: 5px solid #42A948;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZWRpdC9jdXN0b21lci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7SUFJSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgXHJcbi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J251bWJlciddLFxyXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxyXG4uY3VzdG9tZXItZm9ybSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmN1c3RvbWVyLWZvcm0gLm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxufVxyXG5cclxuLmN1c3RvbWVyLWZvcm0gLm5nLXZhbGlkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/data.service */ "./src/app/core/services/data.service.ts");




let CustomerEditComponent = class CustomerEditComponent {
    constructor(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            if (id !== 0) {
                this.operationText = 'Update';
                this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    getCustomer(id) {
        this.dataService.getCustomer(id).subscribe((customer) => {
            this.customer = customer;
        });
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customer']);
            }
            else {
                this.errorMessage = "Unable to delete customer";
            }
        });
    }
};
CustomerEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customerForm', { static: true })
], CustomerEditComponent.prototype, "customerForm", void 0);
CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-edit/customer-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customer/customer-edit/customer-edit.component.css")).default]
    })
], CustomerEditComponent);



/***/ }),

/***/ "./src/app/customer/customer-order/customer-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-order/customer-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrderComponent", function() { return CustomerOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CustomerOrderComponent = class CustomerOrderComponent {
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ngOnInit() {
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            if (id) {
                this.dataService.getCustomer(id)
                    .subscribe((customer) => {
                    this.customer = customer;
                });
            }
        });
    }
};
CustomerOrderComponent.ctorParameters = () => [
    { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CustomerOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer-order/customer-order.component.html")).default
    })
], CustomerOrderComponent);



/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customer_order_customer_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-order/customer-order.component */ "./src/app/customer/customer-order/customer-order.component.ts");







const routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
        children: [
            { path: 'orders', component: _customer_order_customer_order_component__WEBPACK_IMPORTED_MODULE_6__["CustomerOrderComponent"] },
            { path: 'details', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"] },
            {
                path: 'edit',
                component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"],
            }
        ]
    }
];
let CustomerRoutingModule = class CustomerRoutingModule {
};
CustomerRoutingModule.components = [_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"], _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"], _customer_order_customer_order_component__WEBPACK_IMPORTED_MODULE_6__["CustomerOrderComponent"]];
CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
    })
], CustomerRoutingModule);



/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerComponent = class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");







let CustomerModule = class CustomerModule {
};
CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_6__["CustomerRoutingModule"]],
        declarations: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_6__["CustomerRoutingModule"].components],
        exports: [_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"]]
    })
], CustomerModule);



/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es2015.js.map