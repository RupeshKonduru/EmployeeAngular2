import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
//  template: `<list-employee></list-employee>`,
//})
//export class AppComponent  { }

//  template: `Your Text : <input type='text' [(ngModel)]='userText'/>
//               <br/><br/>
//               <simple [simpleInput]='userText'></simple>
//              `
//})
//export class AppComponent {
//    userText: string = 'Pragim';

template: `
                    <div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active">
                                <a routerLink="home">Home</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employees">Employees</a>
                            </li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>
              `
})
export class AppComponent  { }