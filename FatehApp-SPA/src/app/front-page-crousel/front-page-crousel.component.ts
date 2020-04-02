import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-front-page-crousel',
  templateUrl: './front-page-crousel.component.html',
  styleUrls: ['./front-page-crousel.component.css']
})
export class FrontPageCrouselComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  requestQuote() {

    this.router.navigate(['/quotes-request']);
  }

}
