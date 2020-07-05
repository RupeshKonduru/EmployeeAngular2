import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
// import toPromise operator
import 'rxjs/add/operator/toPromise';


// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    // Inject Angular http service
    constructor(private _http: Http) { }

    // Notice the method return type is Observable<IEmployee[]>
    getEmployees(): Observable<IEmployee[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:52650/api/employees')
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }
    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:52650/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    // Notice we changed the return type of the method to Promise<IEmployee>
    // from Observable<IEmployee>. We are using toPromise() operator to
    // return a Promise. When an exception is thrown handlePromiseError()
    // logs the error to the console and throws the exception again
    getEmployeeByPromiseCode(empCode: string): Promise<IEmployee> {
        return this._http.get("http://localhost:52650/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .toPromise()
            .catch(this.handlePromiseError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
    // This method is introduced to handle exceptions
    handlePromiseError(error: Response) {
        console.error(error);
        throw (error);
    }
}
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