import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../../../../app/services/libraryService';

@Component({
  selector: 'app-book-log',
  providers: [LibraryService],
  templateUrl: './book-log.component.html'
})
export class BookLogComponent implements OnInit {
  @Input() issuedBook;
  @Input() bookData;
  @Input() getBookPlace;
  @Input() logs;

  constructor(
    private libraryService: LibraryService
  ) { }

  modalId: any;
  public successMsz = false;
  targetModalId: any;
  ratingArray = [1, 2, 3, 4, 5];

  todaysDate = new Date();

  ngOnInit() { }

  returnBook(book, bookIndex): void {
    this.successMsz = true;
    this.issuedBook[bookIndex].toDate = this.todaysDate;
    this.libraryService.returnTheBook(book.id, this.issuedBook[bookIndex]).then((res) => {
      const issuedBooksInd = this.issuedBook.map(data => {
        return data.id;
      }).indexOf(book.id);
      this.issuedBook.splice(issuedBooksInd, 1);
      this.logs.push(book);
      book.toDate = this.todaysDate;
    }).catch((err) => {
    });
  }

  ratingToBook(rating, bookIndex): void {
    this.issuedBook[bookIndex].rating = rating;
  }

}
