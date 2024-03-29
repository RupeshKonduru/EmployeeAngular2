"use strict";
var Employee = (function () {
    // All the interface mandatory properties are defined  
    //public code: string;
    //public name: string;
    //public gender: string;
    //public annualSalary: number;
    //public dateOfBirth: string;
    // The above class properties are then initialized
    // using the constructor parameters. To do something
    // like this, TypeScript has a shorthand syntax which
    // reduces the amount of code we have to write
    function Employee(code, name, gender, annualSalary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
        //this.code = code;
        //this.name = name;
        //this.gender = gender;
        //this.annualSalary = annualSalary;
        //this.dateOfBirth = dateOfBirth;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map