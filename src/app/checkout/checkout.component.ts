import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApistoreService } from '../apistore.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutObj } from './checkout.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  sellForm:FormGroup;
  showAccount:boolean=false
  totalPrice:number=0
  productObj = {}
  constructor(private fb: FormBuilder, private route:ActivatedRoute,private gameApi:ApistoreService, private http:HttpClient, private router:Router) {
    this.sellForm = this.fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      state:['', Validators.required],
      city:['', Validators.required],
      zipcode:['', Validators.required],
      account:[''],
      ifsc:[''],
      email:['', [Validators.required, Validators.email]],
      productQty:[1, Validators.required]
    })
   }
  calculateTotalPrice() {
      if(this.showAccount){
        this.totalPrice = (+this.productObj['cashPrice']) * (+this.sellForm.value.productQty)
      }
      else{
        this.totalPrice = (+this.productObj['creditPrice']) * (+this.sellForm.value.productQty)
      }
    
  }
  

  ngOnInit(): void {
    let id =this.route.snapshot.paramMap.get('id');
    this.gameApi.getGameDetails(id).subscribe((data)=>{
      this.productObj['img'] = data.imagePath
      this.productObj['cashPrice'] = data.cashPrice
      this.productObj['creditPrice'] = data.creditPrice
      this.productObj['description'] = data.description
      this.productObj['id'] = data['_id']
      
      this.totalPrice = data.creditPrice
      
      }, err=>{
        console.log(err);
        
      })
  }

  onSubmit(){
    
    
    if(this.sellForm.valid){
      
      let paymentType=this.showAccount?"cash":"credit"
      let obj:CheckoutObj = {
        productID:this.productObj['id'],
        productQty:this.sellForm.value.productQty,
        userName:this.sellForm.value.name,
        userMail:this.sellForm.value.email,
        address:this.sellForm.value.address,
        state:this.sellForm.value.state,
        city:this.sellForm.value.city,
        zip:this.sellForm.value.zipcode,
        paymentType
      }
  
      if(this.showAccount){
        obj['accountNo'] = this.sellForm.value.account
        obj['ifsc'] = this.sellForm.value.ifsc
      }

      this.http.post("http://localhost:3000/sell/", obj)
      .subscribe(result=>{
        console.log(result);
        this.router.navigate(['orderhistory'])
      },err=>{
        console.log(err);
        
      })
    }

    else{
      console.log("Please fill all the filds");
      
    }
  }

}
