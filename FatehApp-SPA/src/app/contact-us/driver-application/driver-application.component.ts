import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-application',
  templateUrl: './driver-application.component.html',
  styleUrls: ['./driver-application.component.css']
})
export class DriverApplicationComponent implements OnInit {
  pdfSrc = "/assets/fateh_driver_application.pdf";
  constructor() { }

  ngOnInit() {
  }

}
