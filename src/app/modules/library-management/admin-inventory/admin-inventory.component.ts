import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LibraryService } from '../../../../app/services/libraryService';

@Component({
  selector: 'app-admin-inventory-management-panel',
  providers: [LibraryService],
  templateUrl: './admin-inventory.component.html'
})
export class AdminInventoryManagementPanelComponent implements OnInit {
  @Input() bookData;

  constructor(
    private libraryService: LibraryService
  ) { }

  books: any;
  private booksDataCopy;
  filterValueArray = ['Select', 'Fiction', 'Management', 'Technology'];
  filterValue: any;
  textFieldMode = [];

  ngOnInit() {
    this.filterValue = 'Select';
    this.books = this.bookData;
    this.booksDataCopy = this.books;
  }

  deleteBook(data, i) {
    this.booksDataCopy.forEach((element, index) => {
      if (element.title === data) {
        this.books.splice(i, 1);
      }
    });
  }

  UpdateInfo(book): void {
    const bookData = {
      'title': book.title,
      'isbn': book.isbn,
      'author': book.author,
      'genre': book.genre,
      'totalPresent': book.totalPresent
    };
    this.libraryService.updateBooks(book.id, bookData).then(data => {
    }).catch(err => {
    });
  }

}
