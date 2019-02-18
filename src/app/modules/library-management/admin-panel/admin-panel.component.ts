import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LibraryService } from '../../../../app/services/libraryService';

@Component({
  selector: 'app-admin-panel',
  providers: [LibraryService],
  templateUrl: './admin-panel.component.html'
})
export class AdminPanelComponent implements OnInit {
  currentPanel;
  constructor(
    private router: Router,
    private http: HttpClient,
    private libraryService: LibraryService
  ) { }

  users: any;
  booksData: any;
  inventory: any;
  titleG = false;
  getInitData(): void {
    this.libraryService.getBooks().then((data) => {
      this.booksData = data;
    });
  }
  ngOnInit() {
    this.getInitData();
    setTimeout(() => {
      this.currentPanel = 'inventory-manage';
    }, 50);
  }

  setCurrentPanel(panelName: string): void {
    this.currentPanel = panelName;
  }
  logOut(): void {
    sessionStorage.setItem('isLoogedIn', '0');
    this.router.navigate(['/login']);
  }
}
