import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';

import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { RouterModule, Routes } from '@angular/router';
import { UserPreferencesService } from './employee/userPreferences.service';
import { TestModule } from './test.module'
// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home


// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
    
];


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, TestModule,
        RouterModule.forRoot(appRoutes)],  //Also uncommnet system.webserver in web.config
        //RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent,  EmployeeComponent, PageNotFoundComponent, HomeComponent, EmployeeListComponent, EmployeeCountComponent, SimpleComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService/*, UserPreferencesService*/]
})
export class AppModule { }
