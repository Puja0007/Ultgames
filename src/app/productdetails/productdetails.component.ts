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
img:string;
sellForm:FormGroup;
  constructor(private route1:ActivatedRoute,private gameApi:ApistoreService,private fb: FormBuilder) {
    this.sellForm = this.fb.group({
      Name:['',[Validators.required]],
      category:['',[Validators.required]],
      cashPrice:['',[Validators.required]],
      creditPrice:['',[Validators.required]],
      account:['']
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
  
}
