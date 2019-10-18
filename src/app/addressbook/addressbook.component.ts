import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { PageEvent } from '@angular/material/paginator';
import { Contact } from '../models/contact';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Query } from '../models/helper';
@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'telephoneNumber', 'created', 'modified'];
  // tslint:disable-next-line: max-line-length
  displayedColumnsSearch: string[] = ['idSearch', 'firstNameSearch', 'lastNameSearch', 'addressSearch', 'telephoneNumberSearch', 'createdSearch', 'modifiedSearch'];
  data: Contact[] = [];
  queryS: Contact = {id: '', telephoneNumber: '', modified: null, address: '', created: null, firstName: '', lastName: ''};
  isLoadingResults = true;
    // MatPaginator Inputs
    pageIndex = 0;
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    // MatPaginator Output
    pageEvent: PageEvent;
  sortByColumn = 'firstName';
  ordering = 'asc';
  constructor(private api: ApiService) { }
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.api.searchContacts('?skip=' + (this.pageIndex * this.pageSize) + '&take=' + this.pageSize
    + '&ordering=' + this.ordering + '&column=' + this.sortByColumn)
    .subscribe(res => {
      this.data = res.data;
      this.length = res.totalCount;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  onPageChange(pageEvent: PageEvent = null, sortByColumn: string = null) {
    if (sortByColumn) {
      this.ordering = this.ordering === 'asc' ? 'desc' : 'asc';
      this.sortByColumn = sortByColumn;
    }
    if (pageEvent == null) {
      pageEvent = this.pageEvent;
    } else {
      this.pageIndex = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;
    }
    // tslint:disable-next-line: label-position
    const queries: Query[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.displayedColumns.length; i++) {
      if (this.queryS[this.displayedColumns[i]]) {
        queries.push({property: this.displayedColumns[i], value: this.queryS[this.displayedColumns[i]]});
      }
    }
    this.api.searchContacts('?skip=' + (this.pageIndex * this.pageSize) + '&take=' + this.pageSize
    + '&ordering=' + this.ordering + '&column=' + this.sortByColumn + '&queries=' + JSON.stringify(queries))
    .subscribe(res => {
      this.data = res.data;
      this.length = res.totalCount;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }


}
