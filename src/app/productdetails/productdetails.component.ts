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

id:string
  constructor(private route1:ActivatedRoute,private gameApi:ApistoreService,private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    let id =this.route1.snapshot.paramMap.get('id');
    
    this.id = id
    this.gameApi.getGameDetails(id).subscribe((data)=>{
    this.img=data.imagePath;
    
    
    })
    
  }
  
  
}
