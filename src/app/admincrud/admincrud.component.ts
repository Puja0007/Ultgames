import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApistoreService } from '../apistore.service';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {
imagePreview:string
gameData:FormGroup;
 constructor(private gameApi:ApistoreService,private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.gameData = this.fb.group({
      description:['',[Validators.required]],
      cashPrice:['',[Validators.required]],
      creditPrice:['',[Validators.required]],
      image:[[Validators.required]]
    })
  }
  onImagePicked(event:Event){
    console.log('Change detected in input type file')
    const file=(event.target as HTMLInputElement).files[0]
    this.gameData.patchValue({
      image: file
    })
    this.gameData.get('image').updateValueAndValidity()
    // const reader = new FileReader()
    // reader.onload = ()=>{
    // this.imagePreview = (reader.result as string)
    // }
    // reader.readAsDataURL(file)

  }

  onSubmit(){
    console.log(this.gameData.value);
    
  this.gameApi.addGameData(this.gameData.value).subscribe((result)=>{
    
  });
  }
}
