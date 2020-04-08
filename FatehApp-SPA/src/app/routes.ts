import { Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { AuthGuard } from './_guards/auth.guard';
import { QuoteResolver } from './_resolvers/quotes.resolver';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SafetyComplianceComponent } from './safety-compliance/safety-compliance.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quotes-request', component: QuoteRequestComponent },
  {
    path: 'quotes',
    component: QuotesComponent,
    canActivate: [AuthGuard],
    resolve: { quotes: QuoteResolver },
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'safety-compliance', component: SafetyComplianceComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
