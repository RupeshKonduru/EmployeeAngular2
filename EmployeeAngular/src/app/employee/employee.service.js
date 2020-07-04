"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// Import Http & Response from angular HTTP module
var http_1 = require("@angular/http");
// Import Observable from rxjs/Observable
var Observable_1 = require("rxjs/Observable");
// Import the map operator
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
var EmployeeService = (function () {
    // Inject Angular http service
    function EmployeeService(_http) {
        this._http = _http;
    }
    // Notice the method return type is Observable<IEmployee[]>
    EmployeeService.prototype.getEmployees = function () {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:52654/api/employees')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployeeByCode = function (empCode) {
        return this._http.get("http://localhost:52654/api/employees/" + empCode)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//    getEmployees(): IEmployee[] {
//        return [
//            {
//                code: 'emp101', name: 'Tom', gender: 'Male',
//                annualSalary: 5500, dateOfBirth: '6/25/1988'
//            },
//            {
//                code: 'emp102', name: 'Alex', gender: 'Male',
//                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
//            },
//            {
//                code: 'emp103', name: 'Mike', gender: 'Male',
//                annualSalary: 5900, dateOfBirth: '12/8/1979'
//            },
//            {
//                code: 'emp104', name: 'Mary', gender: 'Female',
//                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
//            },
//            {
//                code: 'emp105', name: 'Nancy', gender: 'Female',
//                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
//            },
//            {
//                code: 'emp106', name: 'Steve', gender: 'Male',
//                annualSalary: 7700.481, dateOfBirth: '11/18/1979'
//            },
//        ];
//    }
//} 
//# sourceMappingURL=employee.service.js.map