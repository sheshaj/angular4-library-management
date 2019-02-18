import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LibraryService } from '../../../../app/services/libraryService';

@Component({
  selector: 'app-admin-config-panel',
  providers: [LibraryService],
  templateUrl: './admin-config-panel.component.html'
})
export class AdminConfigPanelComponent implements OnInit {
  public successMsz = false;

  constructor(
    private libraryService: LibraryService
  ) { }

  configData = {
    'maxBooksPerUser': undefined,
    'maxDaysPerIssue': undefined
  };
  ngOnInit() {
    this.libraryService.getConfiguration().then((data) => {
      this.configData.maxBooksPerUser = data.maxBooksPerUser;
      this.configData.maxDaysPerIssue = data.maxDaysPerIssue;
    }).catch(err => {
    });
  }

  updateConfig(data): void {
    this.successMsz = true;
    this.libraryService.updateConfig(data).then(res => {
    }).catch(err => {
    });
  }

}
