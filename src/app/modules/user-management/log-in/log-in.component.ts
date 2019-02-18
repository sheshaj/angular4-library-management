import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../../../app/services/libraryService';
import { AuthService } from '../../../../app/services/auth.service';

@Component({
  selector: 'app-log-in',
  providers: [LibraryService],
  templateUrl: './log-in.component.html'
})
export class LogInComponent implements OnInit {
  public username;
  public password;
  public errorMsz;

  constructor(
    private router: Router,
    private libraryService: LibraryService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn1(this.username, this.password).then(res => {
      if (res.access === 'AdminAccess') {
        sessionStorage.setItem('isLoogedIn', '1');
        this.router.navigate(['/library-admin']);
      } else if (res.access === 'UserAccess') {
        this.libraryService.setCurrentUser(res.data);
        sessionStorage.setItem('isLoogedIn', '1');
        this.router.navigate(['/library-user']);
      }
    }).catch(err => {
      this.errorMsz = err;
    });
  }
}
