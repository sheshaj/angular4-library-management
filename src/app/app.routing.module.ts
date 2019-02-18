import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './modules/user-management/log-in/log-in.component';
import { AdminPanelComponent } from './modules/library-management/admin-panel/admin-panel.component';
import { UserPanelComponent } from './modules/user-management/user-panel/user-panel.component';
import { AuthGuard } from '../app/services/auth-wrapper.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LogInComponent },
    { path: 'library-user', canActivate: [AuthGuard], component: UserPanelComponent, data: { id: null } },
    { path: 'library-admin', canActivate: [AuthGuard], component: AdminPanelComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
