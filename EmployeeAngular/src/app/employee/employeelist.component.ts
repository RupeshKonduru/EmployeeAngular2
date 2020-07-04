// Import OnInit Life Cycle Hook interface
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
// Import EmployeeService
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    // Register EmployeeService in this component by
    // declaring it in the providers array
    providers: [EmployeeService]
})
// Make the class implement OnInit interface
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    // "Problem with the service. Please try again after sometime"
    statusMessage: string = 'Loading data. Please wait...';
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute) {

    }

    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    //ngOnInit() {
    //    this.employees = this._employeeService.getEmployees();
    //}
    ngOnInit() {
        //Load all employees
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData,
            error => {
                this.statusMessage = 'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }
    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees
            .filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}