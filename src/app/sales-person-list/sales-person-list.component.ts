import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  // create an array of objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@google.com', 50000),
    new SalesPerson('Mike', 'Jordan', 'mike.jordan@google.com', 90000),
    new SalesPerson('Larry', 'Bird', 'larry.bird@google.com', 60000)

  ];
  constructor() {}

  ngOnInit(): void {}
}
