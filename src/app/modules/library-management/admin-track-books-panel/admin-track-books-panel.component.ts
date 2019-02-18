import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../../../../app/services/libraryService';

@Component({
  selector: 'app-admin-track-books-panel',
  providers: [LibraryService],
  templateUrl: './admin-track-books-panel.component.html'
})
export class AdminTrackBooksPanelComponent implements OnInit {

  @Input() bookData;

  constructor(
    private libraryService: LibraryService
  ) { }

  booksIssued: any;
  booksIssuedToUser: any;
  currentTrack: string;

  ngOnInit() {
    this.currentTrack = 'by-book';

    this.libraryService.getBooks().then(data => {
      this.booksIssued = data;
    }).catch(err => {
    });

    this.libraryService.getUsers().then(data => {
      this.booksIssuedToUser = data;
      this.booksIssuedToUser = this.booksIssuedToUser.filter((datum) => {
        if (datum.issuedBooks.length > 0) {
          return datum;
        }
      });
    }).catch(err => {
    });
  }

  setCurrentTrack(track: string): void {
    this.currentTrack = track;
  }

}
