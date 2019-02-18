import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-book-detail-user',
  templateUrl: './book-detail-user.component.html'
})
export class BookDetailUserComponent implements OnInit {
  @Input() bookData;
  @Input() issuedBook;
  @Input() getBookPlace;
  public searchVal;

  filterValueArray = ['Select', 'Fiction', 'Management', 'Technology'];
  filterValue: any;
  constructor() { }

  ngOnInit() {
    this.filterValue = 'Select';
  }

}
