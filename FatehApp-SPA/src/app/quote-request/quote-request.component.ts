import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../_services/quote.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})
export class QuoteRequestComponent implements OnInit {
 model: any = {};
  constructor(private quoteService: QuoteService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  submitQuote() {
    this.quoteService.saveQuote(this.model)
    .subscribe(() => {
      this.alertifyService.success('Quote submitted succefully, One of our representative will contact you very soon');
      console.log('quote saved successfully');
    }, error => { console.log(error);});

  }

}
