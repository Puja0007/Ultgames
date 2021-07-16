import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApistoreService } from '../apistore.service';

@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {






  gameData = new FormGroup({
    name : new FormControl('',[Validators.required]),
    creditPrice : new FormControl('',[Validators.required]),
    cashPrice : new FormControl('',[Validators.required]),
    image : new FormControl('',[Validators.required]),
   
  });

  constructor(private gameApi:ApistoreService) { }

  ngOnInit(): void {
  }
  onSubmit(){
  this.gameApi.addGameData(this.gameData.value);
  }
}
