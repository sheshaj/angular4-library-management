import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../../../app/services/libraryService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  providers: [LibraryService],
  templateUrl: './user-panel.component.html'
})
export class UserPanelComponent implements OnInit {

  constructor(
    private libraryService: LibraryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public issuedBook: any;
  private currentUser = sessionStorage.getItem('currentUser');
  private currentUser2 = JSON.parse(this.currentUser);
  public currentUserDisplay = this.currentUser2.username;
  public currentTab = {};
  logs: any;
  currentPanel: any;
  userPanelModel = {
    'user': undefined,
    'booksData': undefined,
    'configuration': undefined,
    'issueMetadata': undefined
  };

  getInitData(): void {
    this.libraryService.getMetadataToIssue().subscribe((data) => {
      this.userPanelModel.issueMetadata = data;
    });
    this.libraryService.getBooks().then((data) => {
      this.userPanelModel.booksData = data;
    });
    this.libraryService.getConfiguration().then((data) => {
      this.userPanelModel.configuration = data;
    });
    this.libraryService.getInMemoryData('currentUser').then((data) => {
      this.userPanelModel.user = data;
      this.issuedBook = this.userPanelModel.user.issuedBooks;
      this.logs = this.userPanelModel.user.logs;
    }).catch((err) => {
    });
  }

  ngOnInit() {
    this.getInitData();
    setTimeout(() => {
      this.currentPanel = 'book-detail';
      this.currentTab[this.currentPanel] = true;
    }, 500);
  }


  setCurrentPanel(panelName: string, lastPanel: string): void {
    this.currentPanel = panelName;
    this.currentTab[lastPanel] = false;
    this.currentTab[panelName] = true;
  }

  logOut(): void {
    sessionStorage.setItem('isLoogedIn', '0');
    this.router.navigate(['/login']);
  }
}
