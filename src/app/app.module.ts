import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoreModule } from './core/core.module';
import { BlogModule } from './feature/news/blog.module';
import { OffersModule } from './feature/offers/offers.module';
import { PagesModule } from './feature/pages/pages.module';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    CoreModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BlogModule,
    OffersModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
