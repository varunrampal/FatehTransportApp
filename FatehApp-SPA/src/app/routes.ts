import { Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quotes-request', component: QuoteRequestComponent },
  { path: 'quotes', component: QuotesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
