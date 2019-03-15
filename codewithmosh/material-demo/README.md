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

# Apply theme and typography
Refrence at Angular material website and google fonts

Update index.html
<body class="mat-app-background mat-typography">

Add custom font in styles.css
@import "https://fonts.googleapis.com/css?family=Open+Sans";

Add theme file in angular.json
"styles": [
              "src/styles.css",
              "src/theme.scss"
            ],
New file src/theme.scss


@import "~@angular/material/_theming.scss";
@include mat-core();

// Define a custom theme
$app-primary: mat-palette($mat-blue, 600);
$app-accent: mat-palette($mat-yellow, 700);
$app-warn: mat-palette($mat-red);

//$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
$app-theme: mat-dark-theme($app-primary, $app-accent, $app-warn);
@include angular-material-theme($app-theme);

// Define custom typography
$app-typography: mat-typography-config(
    $font-family:   '"Open Sans", "Helvetica Neue", sans-serif',
    $headline:      mat-typography-level(34px, 32px, 700),
);

@include angular-material-typography($app-typography);
