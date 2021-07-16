import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApistoreService } from '../apistore.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
img:string;
  constructor(private route1:ActivatedRoute,private gameApi:ApistoreService) { }

  ngOnInit(): void {
    let id =this.route1.snapshot.paramMap.get('id');
    console.log(id);
    
    this.gameApi.getGameDetails(id).subscribe((data)=>{
    this.img=data.imagePath;
    console.log(this.img);
    
    })
    
  }

}
