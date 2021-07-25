import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RequestListComponent } from './request-list/request-list.component';
import { SearchgamesComponent } from './searchgames/searchgames.component';


const routes: Routes = [
  {path:'',redirectTo:'search',pathMatch:'full'},
  {path :'search', component: SearchgamesComponent},
  {path:'items/:id', component:ProductdetailsComponent},
  {path:'admin',component:AdmincrudComponent},
  {path:'checkout/:id', component:CheckoutComponent},
  {path:'orderhistory',component:OrderHistoryComponent},
  {path:'userrequests', component:RequestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
