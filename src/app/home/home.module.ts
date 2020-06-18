import { MatDividerModule } from '@angular/material/divider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './../navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
  ],
  exports: [RouterModule]
})
export class HomeModule { }
