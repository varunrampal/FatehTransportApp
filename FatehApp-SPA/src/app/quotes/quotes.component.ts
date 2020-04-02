import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Quote } from '../_models/quote';
import { QuoteService } from '../_services/quote.service';
import { AlertifyService } from '../_services/alertify.service';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  modalRef: BsModalRef;
  quotes: Quote[];
  quoteSelected: any;

  constructor(
    private quoteService: QuoteService,
    private alertifyService: AlertifyService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.loadQuotes();
  }

  loadQuotes() {
    this.quoteService.getQuotes().subscribe(
      (quotes: Quote[]) => {
        this.quotes = quotes;
      },
      error => {
        this.alertifyService.error(error);
      }
    );
  }

  openModal(template: TemplateRef<any>, id: any) {
    this.quoteService.getQuote(id).subscribe(
      (quote: Quote) => {
         this.quoteSelected = quote;
         this.modalRef = this.modalService.show(template,  {class: 'modal-lg'});
      },
      error => {
        this.alertifyService.error(error);
      }
    );

  }

  }
