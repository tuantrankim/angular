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

##Directives
Structural: Modify the structure of the DOM by adding or removing DOM elements
<div *ngIf="courses.length > 0">
    List of courses
</div>
Attribute: Modify the attributes of DOM elements

using ng-template

<div *ngIf="courses.length > 0">
    List of courses
</div>
<div *ngIf="courses.length ===0">
    No courses yet
</div>

<h2>Using ng-template</h2>

<div *ngIf="courses.length > 0; then coursesList else noCourse;"></div>
<ng-template #coursesList>
    List of courses
</ng-template>
<ng-template #noCourse>
    No courses yet
</ng-template>

using ng-switch attribute directive (without *ng)

<h2>ngSwitch</h2>
<ul class="nav nav-pills">
    <li [class.active]="viewMode=='map'"><a (click)="viewMode='map'">Map View</a></li>
    <li [class.active]="viewMode=='list'"><a (click)="viewMode='list'">List View</a></li>
</ul>
<div [ngSwitch]="viewMode">
    <div *ngSwitchCase="'map'">Map View Content</div>
    <div *ngSwitchCase="'list'">List View Content</div>
    <div *ngSwitchDefault></div>
</div>

<h2>ngFor</h2>

<button class="btn btn-primary" (click)="onAdd()">Add</button>
<ul>
    <li *ngFor="let course of courses; index as i">
        {{i}} - {{course.name}}
        <button class="button btn-primary" (click)="onRemove(course)">Remove</button>
    </li>
</ul>


<ul>
    <li *ngFor="let course of courses; even as isEven">
        {{course.name}} <span *ngIf="isEven">(EVEN)</span>
        <button class="button btn-primary" (click)="onChange(course)">Change</button>
    </li>
</ul>

## Tracking to reduce redering

loadCourses(){
    this.courses = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'}
    ];
  }

  trackCourse(index, course){
    return course? course.id : undefined;
  }

<button class="btn btn-primary" (click)="loadCourses()">Load Courses</button>
<ul>
    <li *ngFor="let course of courses; trackBy: trackCourse">
        {{ course.name}}
    </li>
</ul>

Note: *ngIf will rewrite div block using ng-template  element and binding property [ngIf]

##ngClass

<!-- same but using ngClass -->

<span class="glyphicon"
[ngClass] = "{
    'glyphicon-star':isFavorite,
    'glyphicon-star-empty': !isFavorite
}"
(click) = "onClick()"
> </span>

## ngStyle

<button
    [style.backgroundColor] = "canSave? 'blue': 'gray'"
    [style.color] = "canSave? 'white': 'black'"
    [style.fontWeight] = "canSave? 'bold': 'normal'"
>
    Save
</button>
<!-- same but using ngStyle -->
<button

    [ngStyle]="{
        'backgroundColor' : canSave? 'blue': 'gray',
        'color' : canSave? 'white': 'black',
        'fontWeight' : canSave? 'bold': 'normal'
    }"
>
    Save
</button>

## Safe Traversal Operator `?`
<p>To avoid null exception, can use `?` to verify object</p>
<span *ngIf="task.assignee">{{task.assignee.name}}</span>
<!-- check for not null -->
<span>{{task.assignee?.name</span>

## Creating Custom Directives
Run `ng g d input-format`

`input-format.directive.ts`

import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }
  @HostListener('focus') onFocus(){
    console.log("on Focus");
  }
  @HostListener('blur') onblur(){
    //console.log("on Blur");
    let value:string = this.el.nativeElement.value;
    if(this.format == 'lowercase'){
      this.el.nativeElement.value = value.toLowerCase();
    }
    else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}

`app.component.ts`

<h2>Creating Custom Directives</h2>
<!-- From input-format.directive.ts, update alias to 'appInputFormat' 
    to directly binding to the directive name -->
<!-- Instead of using 
<input type="text" appInputFormat [format]="'uppercase'"/> 
now we can use
-->
<input type="text" [appInputFormat]="'uppercase'"/> 

## Basic Bootstrap Form
<h2>Component: Contact-form</h2>
<form >
  <div class="form-group">
  <label for="firstName">First Name</label>
  <input type="firstName" type="text" class="form-control">
</div>
<div class="form-group">
  <label for="comment">Comment</label>
<textarea  id="" cols="30" rows="10" class="form-control"></textarea>
</div>
<button class="btn btn-primary">Submit</button>
</form>

## Types of Forms
To add validation to a form we need to add FormGroup, FormControl
-Creating controls : 2 ways Directives(Template-driven) VS Code(Reactive)

Reactive Form
  More control over validation logic
  Good for complex forms
  Unit testable

Template-driven Form:
  Good for simple forms
  Simple validation
  Easier to create
  Less code
  
## ngModel

  Form control need `ngModel` and name attribute.
  
  <h2>Component: Contact-form</h2>
<form >
  <div class="form-group">
  <label for="firstName">First Name</label>
  <input required ngModel name="firstName" #firstName="ngModel" (change)="log(firstName)" type="firstName" type="text" class="form-control">
  <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">First Name is required</div>
</div>
<div class="form-group">
  <label for="comment">Comment</label>
<textarea ngModel name="comment" id="" cols="30" rows="10" class="form-control"></textarea>
</div>
<button class="btn btn-primary">Submit</button>
</form>

## Specific validation errors
`style.css` add

.form-control.ng-touched.ng-invalid{
    border: 2px solid red;
}

`contact-form.component.ts`

<h2>Component: Contact-form</h2>
<form>
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input required minlength="3" pattern="banana" ngModel name="firstName" #firstName="ngModel"
      (change)="log(firstName)" type="firstName" type="text" class="form-control">
    <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">
      <div *ngIf="firstName.errors.required">First name is required</div>
      <div *ngIf="firstName.errors.minlength">First name is minimum {{firstName.errors.minlength.requiredLength}}
        characters</div>
      <div *ngIf="firstName.errors.pattern">First name doesn't match the pattern</div>
    </div>
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea ngModel name="comment" id="" cols="30" rows="10" class="form-control"></textarea>
  </div>
  <button class="btn btn-primary">Submit</button>
</form>

## ngForm
Any Form element without attribute `ngNoForm` and `formGroup` Angular automatically apply `ngForm` directive on that element.

<h2>Component: Contact-form</h2>
<form #f="ngForm" (ngSubmit)="submit(f)">

  <div ngModelGroup="contact" #contact="ngModelGroup">
    <div class="alert alert-danger"  *ngIf="!contact.valid">Form group invalid</div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input required minlength="3" pattern="banana" ngModel name="firstName" #firstName="ngModel"
        (change)="log(firstName)" type="firstName" type="text" class="form-control">
      <div class="alert alert-danger" *ngIf="firstName.touched && !firstName.valid">
        <div *ngIf="firstName.errors.required">First name is required</div>
        <div *ngIf="firstName.errors.minlength">First name is minimum {{firstName.errors.minlength.requiredLength}}
          characters</div>
        <div *ngIf="firstName.errors.pattern">First name doesn't match the pattern</div>
      </div>
    </div>
  </div>

  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea ngModel name="comment" id="" cols="30" rows="10" class="form-control"></textarea>
  </div>

  <div class="checkbox">
    <label>
      <input type="checkbox" ngModel name="isSubcribed"> Subcribe to mailing list
    </label>
  </div>
  
  <div class="form-group">
    <label for="contactMethod">Contact Method</label>
    <select multiple ngModel name="contactMethod" id="contactMethod" class="form-control">Contact contactMethod
      <option value=""></option>
      <option *ngFor="let method of contactMethods" 
      [value]="method.id">{{method.name}}
    </option>
    <!--  if need value of the object instead of ID only
      <option *ngFor="let method of contactMethods" 
    [ngValue] = "method">{{method.name}} 
    </option>-->
    </select>
  </div>

<div *ngFor="let method of contactMethods" class="radio">
  <label >
    <input ngModel type="radio" name="contactMethod" [value]="method.id"> {{method.name}}
  </label>
</div>


  <p>{{f.value | json}}</p>
  <!-- button default type = 'submit' -->
  <button class="btn btn-primary" [disabled]="!f.valid">Submit</button>
  <button class="btn btn-primary" type="reset">Reset</button>
  <button class="btn btn-primary" type="button">Don't submit</button>
</form>
