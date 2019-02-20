# AngularFundamental
Tutorial url:
https://codewithmosh.com/courses/206545/lectures/3196218

To create the project
Run `ng new AngularFundamental`

To create component
Run `ng generate component component-name`

E.g.: to create authors.component
Run `ng g c authors`

To create service `authors.service.ts`
Run `ng g s authors`

Angular `*ngfor` directive
    `
    <ul>
    <li *ngFor="let e of authors">{{e}}</li>
    </ul>
    `

## One way binding: component -> DOM
    <img src="{{imageURL}}"/>
    <img [src]="imageURL"/>
    <td [attr.colspan]=colSpan> aaa </td> 
    or
    <td [colSpan]=colSpan> aaa </td>

Install Bootstrap
Run `npm install bootstrap --save`
--save to add bootstrap to package.json

to insall all dependencies which list in package.json
Run `npm install`

CSS class binding
    <button class="btn btn-primary" [class.active]="isActive">Save</button>

CSS style binding
    <button [style.backgroundColor]="isActive ? 'blue': 'white'">Style Binding Button</button>

Click event binding    
    <button (click)="onSave($event)">Click event binding</button>

Stop event bubbling
    $event.stopPropagation();

Apply filter when handling an event
    Instead of using
        <input (keyup)="onKeyUp($event)"/>
    We can use filter
        <input (keyup.enter)="onKeyUp()"/>

Template variable
    Instead of using
        <input (keyup.enter)="onKeyUp3($event)"/>
    We can use template variable
        <input #email (keyup.enter)="onKeyUp4(email.value)"/>
## 2 ways binding
Import FormsMoudle in app.module.ts to use ngModel 2 ways binding

    import {FormsModule} from '@angular/forms';
    import:[FormsModule],

            <h2> 2 way binding </h2>

            <input [value]="msg" (keyup.enter)="msg = $event.target.value; onKeyUp5()"/>

Better 2 ways binding using ngModel
            <input [(ngModel)]="msg1" (keyup.enter)="onKeyUp6()"/>

### Using Pipe to display value in different formating
    Reference for more detail
    https://angular.io/api/common/DatePipe

    `<h2> Pipe </h2>
        {{course.title | uppercase | lowercase}} <br/>
        {{course.students | number}} <br/>
        {{course.rating | number:'2.2-2'}} <br/>
        {{course.price | currency:'USD':true:'3.2-2'}} <br/>
        {{course.releaseDate | date: 'shortDate'}}`

### Custom pipe using @Pipe() decorator
    1. Add the custom pipe to app.module declaration
    2. Implement custom.pipe.ts

    `
    import {Pipe, PipeTransform} from '@angular/core';

    @Pipe({
        name: 'summary'
    })

    export class SummaryPipe implements PipeTransform{
        transform(value: string, limit?: number)
        {
            if(!value) return null;
            let actualLimit = (limit) ? limit: 50;
            return value.substr(0,actualLimit)+'...';
        }
}
`
# Pipe create command
    run `ng g p title-case'

# PROJECT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# EXERCISE
1- Get star bootstrap component
goto getbootstrap.com -> component page ->
use `class="glyphicon glyphicon-star"` , `glyphicon glyphicon-star-empty`

# Pipe create command
    run `ng g p title-case'