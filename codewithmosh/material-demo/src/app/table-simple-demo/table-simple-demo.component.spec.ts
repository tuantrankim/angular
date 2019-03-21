import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSimpleDemoComponent } from './table-simple-demo.component';

describe('TableSimpleDemoComponent', () => {
  let component: TableSimpleDemoComponent;
  let fixture: ComponentFixture<TableSimpleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSimpleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSimpleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
