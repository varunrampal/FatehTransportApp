import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { FrontPageCrouselComponent } from './front-page-crousel/front-page-crousel.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CarouselModule } from 'ngx-bootstrap';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { AlertifyService } from './_services/alertify.service';
import { QuoteService } from './_services/quote.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';



@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      FrontPageCrouselComponent,
      QuotesComponent,
      HomeComponent,
      QuoteRequestComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      CarouselModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      ModalModule.forRoot()
   ],
   providers: [
      ErrorInterceptorProvider,
      AuthService,
      AlertifyService,
      QuoteService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
