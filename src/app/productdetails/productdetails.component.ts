import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApistoreService } from '../apistore.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  show:boolean=false;
img:string;
sellForm:FormGroup;
  constructor(private route1:ActivatedRoute,private gameApi:ApistoreService,private fb: FormBuilder) {
    this.sellForm = this.fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      account:[''],
      ifsc:['']
      
    })
   }

  ngOnInit(): void {
    let id =this.route1.snapshot.paramMap.get('id');
    console.log(id);
    
    this.gameApi.getGameDetails(id).subscribe((data)=>{
    this.img=data.imagePath;
    console.log(this.img);
    
    })
    
  }
  changeShow(value:string){
   if(value === 'Cash'){
     this.show = true;
   }
   else if(value === 'Credit'){
     this.show = false;
   }
  }
  onSubmit(){
    console.log(this.sellForm.value);
    
  }
}
