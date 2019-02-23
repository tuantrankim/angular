
import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

//one way binding: component -> dom: using {{prop}} or  [DOM property] = prop
@Component({
        selector: 'courses',
        template: `
            <h2>{{ title}}</h2>
            <h2 [textContent] = "title"> </h2>
            <ul>
                <li *ngFor="let element of courses">
                {{element}}
                </li>
            </ul>
            <img src="{{imageURL}}"/>
            <img [src]="imageURL"/>
            <table>
                <tr>
                    <td [attr.colspan]=colSpan> aaa </td> 
                    <td [colSpan]=colSpan> aaa </td>
                    
                </tr>
                <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                </tr>
            </table>

            <button class="btn btn-primary">Bootstrap Button</button>
            <button class="btn btn-primary" [class.active]="isActive">Class Binding Button</button>
            <button [style.backgroundColor]="isActive ? 'blue': 'white'">Style Binding Button</button>
            <div (click)="onDivClick($event)">
                <button (click)="onSave($event)">Click event binding</button>
            </div>
            <input (keyup)="onKeyUp($event)"/>

            <input (keyup.enter)="onKeyUp2()"/>

            <input (keyup.enter)="onKeyUp3($event)"/>

            <input #email (keyup.enter)="onKeyUp4(email.value)"/>

            <h2> 2 way binding </h2>

            <input [value]="msg" (keyup.enter)="msg = $event.target.value; onKeyUp5()"/>
            <input [(ngModel)]="msg1" (keyup.enter)="onKeyUp6()"/>

            <h2> Pipe </h2>
            {{course.title | uppercase | lowercase}} <br/>
            {{course.students | number}} <br/>
            {{course.rating | number:'2.2-2'}} <br/>
            {{course.price | currency:'USD':true:'3.2-2'}} <br/>
            {{course.releaseDate | date: 'shortDate'}}

            <h3> Custom Pipe </h3>
            {{text | summary:10}}

            <h3> Bootstrap favorite star </h3>
            <span class="glyphicon glyphicon-star"></span>
        `
})

export class    CoursesComponent{
    title = "List of courses";
    text = `
    Some Microsoft or third-party platforms don’t support .NET Core. Some Azure services provide an SDK not yet available for consumption on .NET Core. This is a transitional circumstance, as all of Azure services use .NET Core. In the meantime, you can always use the equivalent REST API instead of the client SDK.
    `
    getTitle(){
        return this.title;
    }

    courses;
    
    private _imageURL : string;
    public get imageURL() : string {
        return this._imageURL;
    }
    public set imageURL(v : string) {
        this._imageURL = v;
    }
    
    colSpan;
    isActive = true;
    msg = 'tuan.tran@fitnessintl.com';
    msg1 = 'tuan.tran@fitnessintl.com';
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    };

    constructor(service: CoursesService) {
        this.courses = service.getCourses();   
        this.imageURL = "http://lorempixel.com/400/200"     
        this.colSpan = 2;
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClick($event){
        console.log("Div was clicked", $event);
    }
    
    onKeyUp($event){
        if($event.keyCode === 13) console.log("1. ENTER was press");
    }

    onKeyUp2(){
        console.log("2. ENTER was press");
    }

    onKeyUp3($event){
        console.log($event.target.value);
    }

    onKeyUp4(email){
        console.log(email);
    }

    onKeyUp5(){
        console.log(this.msg);
    }

    onKeyUp6(){
        console.log(this.msg1);
    }
}