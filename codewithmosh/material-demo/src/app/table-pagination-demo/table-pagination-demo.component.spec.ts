import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationDemoComponent } from './table-pagination-demo.component';

describe('TablePaginationDemoComponent', () => {
  let component: TablePaginationDemoComponent;
  let fixture: ComponentFixture<TablePaginationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePaginationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
