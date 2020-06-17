import { RouterModule } from '@angular/router';
import { NavigationComponent } from './../navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [RouterModule]
})
export class HomeModule { }
