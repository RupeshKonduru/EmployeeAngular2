import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute,Router } from '@angular/router';
//Retry
import 'rxjs/add/operator/retrywhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
// Import rxjs retry operator
import 'rxjs/add/operator/retry';

// import ISubscription.
import { ISubscription } from "rxjs/Subscription";


@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';
    retryCount: number = 1;

    // Create a class property of type ISubscription
    // The ISubscription interface has closed property
    // The ngIf directive in the HTML binds to this property
    // Go to the difinition of ISubscription interface to
    // see the closed property
    subscription: ISubscription;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _route: Router) { }

    onBackButtonClick(): void {
        this._route.navigate(['/employees']);
    }
    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];

        // Use the subscription property created above to hold on to the
        // subscription.We use this object in the onCancelButtonClick()
        // method to unsubscribe and cancel the request
        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            .retryWhen((err) => {
                return err.scan((retryCount, val) => {
                    retryCount += 1;
                    if (retryCount < 4) {
                        this.statusMessage = 'Retrying...Attempt #' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }

    // This method is bound to the click event of the "Cancel Request" button
    // Notice we are using the unsubscribe() method of the subscription object
    // to unsubscribe from the observable to cancel the request. We are also
    // setting the status message property of the class to "Request Cancelled"
    // This message is displayed to the user to indicate that the request is cancelled
    onCancelButtonClick(): void {
        this.statusMessage = 'Request cancelled';
        this.subscription.unsubscribe();
    }
}
