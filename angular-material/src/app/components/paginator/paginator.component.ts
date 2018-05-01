import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  /* Material Paginator configuration */
  // MatPaginator Inputs
  length = 50;
  pageSize = 2;
  pageSizeOptions = [5, 10, 25];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  /*End -  Material Paginator configuration */
  constructor() { }

  ngOnInit() {
  }

}
