import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather'
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChevronLeft,Cpu,Eye,Plus,X,Edit,Trash,ChevronRight,XCircle } from 'angular-feather/icons';
import { SearchgamesComponent } from './searchgames/searchgames.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ApistoreService } from './apistore.service';
import { HttpClientModule } from '@angular/common/http';
import { ClickoutsideDirective } from './clickoutside.directive';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { RequestListComponent } from './request-list/request-list.component';
import { LoginComponent } from './login/login.component';

// Select some icons (use an object, not an array)
const icons = {
  ChevronLeft,Cpu,Eye,Plus,X,Edit,Trash,ChevronRight,XCircle
};
@NgModule({
  declarations: [
    AppComponent,
    SearchgamesComponent,
    ProductdetailsComponent,
    ClickoutsideDirective,
    AdmincrudComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    OrderDetailsComponent,
    RequestListComponent,
    LoginComponent
  ],
  exports: [
    FeatherModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    ApistoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
