import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any; 

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  name = 'Progress Bar';
  IsmodelShow:boolean=false;
  cash:boolean=true;
  credit:boolean=false;
  public counts = ["Recieved","In Progress","Billed"];
  public orderStatus = "Billed"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  orderDetails(){
    this.IsmodelShow=true;
    console.log('order');
    
  }
  cancel(){
    window.location.reload()
  }
}
