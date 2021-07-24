import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApistoreService } from '../apistore.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  sellForm:FormGroup;
  showAccount:boolean=false
  
  productObj = {}
  constructor(private fb: FormBuilder, private route:ActivatedRoute,private gameApi:ApistoreService) {
    this.sellForm = this.fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      state:['', Validators.required],
      city:['', Validators.required],
      zipcode:['', Validators.required],
      account:[''],
      ifsc:[''],
      email:['', Validators.required, Validators.email]
      
    })
   }

  ngOnInit(): void {
    let id =this.route.snapshot.paramMap.get('id');
    this.gameApi.getGameDetails(id).subscribe((data)=>{
      this.productObj['img'] = data.imagePath
      this.productObj['cashPrice'] = data.cashPrice
      this.productObj['creditPrice'] = data.creditPrice
      this.productObj['description'] = data.description
      this.productObj['id'] = data['_id']
      
      
      
      }, err=>{
        console.log(err);
        
      })
  }

}
