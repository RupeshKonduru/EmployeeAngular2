"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./Others/pageNotFound.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var simple_component_1 = require("./Others/simple.component");
var employee_component_1 = require("./employee/employee.component");
var employee_service_1 = require("./employee/employee.service");
var router_1 = require("@angular/router");
var test_module_1 = require("./test.module");
// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employees', component: employeeList_component_1.EmployeeListComponent },
    { path: 'employees/:code', component: employee_component_1.EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, test_module_1.TestModule,
            router_1.RouterModule.forRoot(appRoutes)],
        //RouterModule.forRoot(appRoutes, { useHash: true })],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, pageNotFound_component_1.PageNotFoundComponent, home_component_1.HomeComponent, employeeList_component_1.EmployeeListComponent, employeeCount_component_1.EmployeeCountComponent, simple_component_1.SimpleComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.EmployeeService /*, UserPreferencesService*/]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map