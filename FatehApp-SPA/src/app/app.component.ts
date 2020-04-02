import { Component, Output, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userLoggedIn = false;
  title = 'FatehApp-SPA';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log(this.userLoggedIn);
    this.authService.userLoggedIn
    .subscribe((status: boolean) => {this.userLoggedIn = status; console.log(this.userLoggedIn);});

  }
}
