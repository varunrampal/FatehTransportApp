import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService,
              private router: Router, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
     this.authService.login(this.model)
     .subscribe(next => {
        this.alertifyService.success('Logged in successfully');
        this.authService.userLoggedIn.emit(true);
     }, error => {
          this.alertifyService.error('Failed to login');
     });
  }

  loggedIn() {
   return !! localStorage.getItem('token');

  }

  logout() {
     localStorage.removeItem('token');
     this.alertifyService.message('logged out');
     this.router.navigate(['/home']);

  }

}
