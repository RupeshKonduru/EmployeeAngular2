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
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
//Retry
require("rxjs/add/operator/retrywhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
// Import rxjs retry operator
require("rxjs/add/operator/retry");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService, _activatedRoute, _route) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._route = _route;
        this.statusMessage = 'Loading data. Please wait...';
        this.retryCount = 1;
    }
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._route.navigate(['/employees']);
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        // Use the subscription property created above to hold on to the
        // subscription.We use this object in the onCancelButtonClick()
        // method to unsubscribe and cancel the request
        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            .retryWhen(function (err) {
            return err.scan(function (retryCount, val) {
                retryCount += 1;
                if (retryCount < 4) {
                    _this.statusMessage = 'Retrying...Attempt #' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0).delay(1000);
        })
            .subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage =
                    'Employee with the specified Employee Code does not exist';
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage =
                'Problem with the service. Please try again after sometime';
            console.error(error);
        });
    };
    // This method is bound to the click event of the "Cancel Request" button
    // Notice we are using the unsubscribe() method of the subscription object
    // to unsubscribe from the observable to cancel the request. We are also
    // setting the status message property of the class to "Request Cancelled"
    // This message is displayed to the user to indicate that the request is cancelled
    EmployeeComponent.prototype.onCancelButtonClick = function () {
        this.statusMessage = 'Request cancelled';
        this.subscription.unsubscribe();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map