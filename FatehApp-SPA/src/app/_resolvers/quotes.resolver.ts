import {Injectable} from '@angular/core';
import {Quote} from '../_models/quote';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import {QuoteService} from '../_services/quote.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class QuoteResolver implements Resolve<Quote> {
   constructor(private quoteService: QuoteService,
               private router: Router,
               private alertify: AlertifyService) {}
    resolve(route: ActivatedRouteSnapshot): Observable<Quote> {
        return this.quoteService.getQuotes().pipe(
          catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/quotes']);
            return of(null);

          })

        );
    }

}