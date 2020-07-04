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
// Import OnInit Life Cycle Hook interface
var core_1 = require("@angular/core");
// Import EmployeeService
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var userPreferences_service_1 = require("./userPreferences.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _activatedRoute, _userPreferencesService) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._userPreferencesService = _userPreferencesService;
        this.selectedEmployeeCountRadioButton = 'All';
        // Inject EmployeeService using the constructor
        // The private variable _employeeService which points to
        // EmployeeService singelton instance is then available
        // throughout this class
        // "Problem with the service. Please try again after sometime"
        this.statusMessage = 'Loading data. Please wait...';
    }
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colourPreference;
        },
        set: function (value) {
            this._userPreferencesService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    //ngOnInit() {
    //    this.employees = this._employeeService.getEmployees();
    //}
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Load all employees
        this._employeeService.getEmployees()
            .subscribe(function (employeesData) { return _this.employees = employeesData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees
            .filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css'],
        // Register EmployeeService in this component by
        // declaring it in the providers array
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute, userPreferences_service_1.UserPreferencesService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map