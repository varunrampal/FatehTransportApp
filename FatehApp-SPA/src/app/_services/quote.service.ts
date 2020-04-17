import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Quote } from '../_models/quote';
import { map } from 'rxjs/operators';

const httppOtions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  baseUrl = environment.apiUrl + 'quote/';
  constructor(private http: HttpClient) {}

  saveQuote(model: any) {
    return this.http.post(this.baseUrl + 'savequote', model, httppOtions);
  }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.baseUrl + 'getquotes', httppOtions).pipe(
      map(res => {
        return res.map(quote => {
          const quoteDate = new Date(quote.quoteDate);
          quote.quoteDate = this.convertDateFormat(quoteDate);
          return quote;
        });
      })
    );
  }

  getQuote(id: any): Observable<Quote> {
    return this.http
      .get<Quote>(this.baseUrl + 'getquote/' + id, httppOtions)
      .pipe(
        map(quote => {
          const quoteDate = new Date(quote.quoteDate);
          quote.quoteDate = this.convertDateFormat(quoteDate);
          if (quote.overview === null || quote.overview === '') {
            quote.overview = 'no overview submitted';
          }
          return quote;
        })
      );
  }

  deleteQuote(id: number) {
    return this.http.post(this.baseUrl + 'deletequote/' + id, httppOtions);
  }

  convertDateFormat(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateToreturn = day + '-' + month + '-' + year;
    return dateToreturn;
  }
}
