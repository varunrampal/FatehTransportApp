import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {
  indexPage = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
   const url = this.router.url;
   if (url.indexOf('home') !== -1) {
       this.indexPage = true;
    }

   console.log(this. router.url);

  }

  ngOnInit() {
  }

}
