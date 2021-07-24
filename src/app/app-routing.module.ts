import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SearchgamesComponent } from './searchgames/searchgames.component';


const routes: Routes = [
  {path:'',redirectTo:'search',pathMatch:'full'},
  {path :'search', component: SearchgamesComponent},
  {path:'items/:id', component:ProductdetailsComponent},
  {path:'admin',component:AdmincrudComponent},
  {path:'checkout/:id', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
