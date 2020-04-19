import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  pdfFiles = [
    {
      name: 'Fateh S Driver Application',
      startPage: 2,
      path: './assets/fateh_driver_application.pdf'
    }
  ]
  constructor() { }

  ngOnInit() {
 
  }

  openpdf()
  {
    // const domain = window.location.href.replace('http://','').replace('https://','').split(/[/?#]/)[0];
    // const fileUrl = domain + '/fateh_driver_application.pdf';
    // window.open(fileUrl, '_blank');
    window.open('../assets/fateh_driver_application.pdf' + '#page=1', '_blank', '', true);
  }

}
