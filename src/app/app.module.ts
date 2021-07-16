import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChevronLeft,Cpu,Eye,Plus,X,Edit,Trash } from 'angular-feather/icons';
import { SearchgamesComponent } from './searchgames/searchgames.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ApistoreService } from './apistore.service';
import { HttpClientModule } from '@angular/common/http';
import { ClickoutsideDirective } from './clickoutside.directive';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import {ReactiveFormsModule } from '@angular/forms';

// Select some icons (use an object, not an array)
const icons = {
  ChevronLeft,Cpu,Eye,Plus,X,Edit,Trash
};
@NgModule({
  declarations: [
    AppComponent,
    SearchgamesComponent,
    ProductdetailsComponent,
    ClickoutsideDirective,
    AdmincrudComponent
  ],
  exports: [
    FeatherModule,
    HttpClientModule,
   
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons)
  ],
  providers: [
    ApistoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
