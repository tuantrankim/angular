import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberXSystemService } from '../services/member-xsystem.service';
import { Commission } from '../models/commission.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {
  commissions: Commission[];
  displayedColumns: string[] = ['id', 'type', 'amount', 'date', 'note'];
  dataSource: MatTableDataSource<Commission>;
  isLoading: boolean;
  pipe: DatePipe;

  private sort: MatSort;
  private paginator: MatPaginator;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);


  }
  constructor(private service: MemberXSystemService, private security: SecurityService) {
    this.dataSource = new MatTableDataSource<Commission>(this.commissions);
  }

  ngOnInit() {
    // console.log('init');

    this.pipe = new DatePipe('en');
    console.log(this.dataSource.filterPredicate);
    const defaultPredicate=this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data, filter) =>{
      const formatted = this.pipe.transform(data.date, 'MM/dd/yyyy');
      return formatted.indexOf(filter) >= 0 || defaultPredicate(data, filter) ;
    }

    this.loadCommissions();
  }

  search(input: HTMLInputElement) {
    // customerID =  38362689
    this.isLoading = true;
    this.commissions = null;
    const request = { customerID: input.value };
    console.log('customerID', request);
    this.service.post('commission', request)
      .subscribe(data => {
        this.commissions = data as Commission[];
        this.dataSource.data = this.commissions;
        this.dataSource.filter = null;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        throw error;
      }
      );
  }
  loadCommissions() {
    if(this.security && this.security.customer)
    {
    this.isLoading = true;
    this.commissions = null;
    const request = { customerID: this.security.customer.id };
    console.log('customerID', request);
    this.service.post('commission', request)
      .subscribe(data => {
        this.commissions = data as Commission[];
        this.dataSource.data = this.commissions;
        this.dataSource.filter = null;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        throw error;
      }
      );
    }
  }

  // async search(input: HTMLInputElement) {
  //   // customerID =  38362689
  //   this.commissions = null;
  //   const request = {customerID: input.value};
  //   console.log('customerID', request);
  //   await this.service.post('commission', request)
  //     .subscribe(data => {
  //       this.commissions = data as Commission[];
  //       this.dataSource = new MatTableDataSource<Commission>(this.commissions);

  //     }
  //       );
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTotal() {
    return this.commissions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
}
