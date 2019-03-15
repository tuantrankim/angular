# To install Material-UI
$npm i --save @angular/cdk @angular/material @angular/animations hammerjs

1- Import theme into styles.css
@import  "~@angular/material/prebuilt-themes/indigo-pink.css";

2- Add anymation support in app.module.ts
@import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//if don't want to have animation
@import { NoopAnimationsModule } from '@angular/platform-browser/animations';
imports:[
    BrowserAnimationsModule
],
# Use material ui
go to url
https://material.angular.io/components/datepicker/api

click API then copy/paste import module string
import module into project

copy/paste some example to component.html

# Create module
ng g m mat-components

# MaterialDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

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
