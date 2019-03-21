import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { AnimalComponent } from './animal/animal.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { TablePaginationDemoComponent } from './table-pagination-demo/table-pagination-demo.component';
import { TableSimpleDemoComponent } from './table-simple-demo/table-simple-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
    AnimalComponent,
    TableDemoComponent,
    TablePaginationDemoComponent,
    TableSimpleDemoComponent
  ],
  entryComponents:[
    EditCourseComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [
    
    CourseService//short way
    // {provide: CourseService, useClass: CourseService},//long way
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
