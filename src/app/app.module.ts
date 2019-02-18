import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BookDetailTileComponent } from './modules/library-management/book-detail-grid/book-detail-grid.component';
import { BookDetailUserComponent } from './modules/library-management/book-detail-user/book-detail-user.component';
import { LogInComponent } from './modules/user-management/log-in/log-in.component';
import { AdminPanelComponent } from './modules/library-management/admin-panel/admin-panel.component';
import { AdminConfigPanelComponent } from './modules/user-management/admin-config-panel/admin-config-panel.component';
// tslint:disable-next-line:max-line-length
import { AdminInventoryManagementPanelComponent } from './modules/library-management/admin-inventory/admin-inventory.component';
import { AdminTrackBooksPanelComponent } from './modules/library-management/admin-track-books-panel/admin-track-books-panel.component';
import { UserPanelComponent } from './modules/user-management/user-panel/user-panel.component';
import { LibraryService } from '../app/services/libraryService';
import { AuthService } from '../app/services/auth.service';
import { BookLogComponent } from './modules/library-management/book-log/book-log.component';
import { FilterDataPipe } from './utilities/pipes/bookDataFilter.pipe';
import { AuthGuard } from '../app/services/auth-wrapper.service';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailTileComponent,
    BookDetailUserComponent,
    LogInComponent,
    AdminConfigPanelComponent,
    AdminPanelComponent,
    AdminInventoryManagementPanelComponent,
    AdminTrackBooksPanelComponent,
    UserPanelComponent,
    BookLogComponent,
    FilterDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LibraryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
