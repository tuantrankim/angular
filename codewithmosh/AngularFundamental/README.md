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
    <ul>
    <li *ngFor="let e of authors">{{e}}</li>
    </ul>

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

# BuildingReusableComponents

property and event binding
<img [src] = "imageUrl"/>
<button (click) = "onClick()"> </button>

our new component need similar binding to pass value between components (parent child components)

<favorite [isFavorite] = "post.isFavorite" (change)="onFavoriteChange()"></favorite>

need to define the public property `isFavorite` to be an input property

## Input and output properties
Input property to pass `state` to component
Output property to raise `event` from component
Input and output properties make `component API`

Input property:
@Component({
    ...,
    inputs:['isFavorite']
})

Or better 

import {Input} from '@angular/core'
@Input() isFavorite: boolean;`

//using alias
@Input('alisas') isFavorite: boolean;

Output property

import {Output} from '@angular/core'
@Output() change = new EventEmitter(); //event name


Raise an event `this.change.emit();`
e.g.

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

## Template
@Component({
    template:''
})

OR (cannot have both)

@Component({
    templateUrl:'./favorite.component.html'
})

## Style
@Component({
    styles:[
        `
        ....
        `
    ]
})

OR/AND (if use both, the last one will take affect and  the others will be ignored)

@Component({
    stylesUrl:['./favorite.component.css','...']
})

if there are `style` in `template` file, this style will overwrite the `component style`

E.g. : in favorite.component.html
<style>
    .glyphicon{
        color: blue
    }
</style>

<span class="glyphicon"> </span>

# Component Style has scope inside the component
#Shadow DOM
var el = document.querySelector('favorite');
var root = el.createShadowRoot();
root.innerHTML= `
<style>h1{color:red} </style>
<h1>hello</h1>
`;
this code won't affect others <h1> style bc it implements shadown DOM

#View Encapsulation
@Component({
    encapsulation: ViewEncapsulation.Emulated
})

3 modes
    encapsulation: ViewEncapsulation.Emulated : default mode, emulate the shadow DOM (using css)
    encapsulation: ViewEncapsulation.Native : it using shadow DOM in the browser. only support Chrome and some higher version of browsers. Need to copy boostrap from global styles.css to current coponent othewise the component style doesnt see the boostrap.

    encapsulation: ViewEncapsulation.None . The style define here will be leak outside

## ngContent element in stead of property binding

./panel.component.html

<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select=".heading"></ng-content>
  </div>
  <div class="panel-body">
    <ng-content select=".body"></ng-content>
  </div>
</div>

./app.component.html

<bootstrap-panel >
    <div class="heading">Heading</div>
    <div class="body">
        <h2>Body</h2>
        <p>Some content here...</p>
    </div>
</bootstrap-panel>

or using `ng-container` to get better generated html

<bootstrap-panel >
    <ng-container class="heading">ng-container</ng-container>
    <ng-container class="body">
        <h2>ngContainer</h2>
        <p>Instead of div, using ng-container to get better generated html</p>
    </ng-container>
</bootstrap-panel>