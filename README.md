# Tutorial video 
https://www.youtube.com/watch?v=k5E2AVpwsko

# Install NodeJS and NPM
https://nodejs.org/en/download/

Check version
	> node --version
	> npm --version
	
Install Angular
	> npm install -g @angular/cli
	> ng --version
	
Create Angular project
	> ng new hello-world
	
Using VS code
	> ctrl shift p
	> Install 'code' command in PATH

To open VS code from Cmd
	> code .

Run the hello-world app
	cmd> cd hello-world
	> ng serve

	open browser url
	http://localhost:4200/

Install typescript
	> npm install -g typescript
	or install latest version (remember to remove enviroment path to old Visual Studio typescript version)
	> npm install -g typescript@latest
	or update to latest
	> npm update -g typescript@latest
	> tsc --version

Typescript compile
	> tsc main.ts	

Execute javascript using node
	> node main.js
	> tsc --target es5 main.ts &&  node main.js

Javascript var vs let
	var i; can access to i outside of scope
	let i; cannot access to i outside of scope, similar to c# or java

Strong type variable using typescript
	let i = 5; //i is a number
	let i: number; //i is a number
	let i;// i is any; no type declare yet

	let a: number;
	let b: boolean;
	let c: string;
	let d: any;
	let e: number[] = [1,2,3];
	let f: any[] = [1,true, 'a', false];

	const ColorRed = 0;
	const ColorGreen = 1;
	const ColorBlue = 2;

	enum Color {Red, Green, Blue};
	enum Color {Red = 0, Green = 1, Blue = 2};
	let backgroundColor = Color.Red;

Typescript: type association
	let isEndWithC = (<string>message).endsWith('c');

Angular component
	Data + HTML template + logic
	e.g.: Navbar component, Sidebar component, Courses components
	Create component -> Register it in a module -> add an element in an HTML markup

Create Angular component (e.g.: course component)
	> ng g c course
	// g : generate, c : component

Binding component variable to template
      template: '<h2>{{ title }}</h2>'

Binding component method to template
      template: '<h2>{{ getTitle() }}</h2>'

Multiple line template: using ` ` instead of ' '


Create Angular service (e.g.: email service)
	>ng g s email

@Component() decorator already include @Injectable() decorator
using @Injectable() to do dependency injection via a class constructor
e.g.
	import { Injectable } from '@angular/core';

	@Injectable({
	providedIn: 'root'
	})
	export class EmailService {

	constructor(logService: LogService) { }
	}