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
allGames=[];
gameId:string;
editGameCheck:boolean=false;
 constructor(private gameApi:ApistoreService,private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.gameData = this.fb.group({
      description:['',[Validators.required]],
      category:['',[Validators.required]],
      cashPrice:['',[Validators.required]],
      creditPrice:['',[Validators.required]],
      image:[[Validators.required]]
    })

    this.gameApi.getAllGames().subscribe((result:any)=>{
      result.forEach(element => {
        console.log(element);
        this.allGames.push(element);
      });
      
    })
  }
  onImagePicked(event:Event){
    console.log('Change detected in input type file')
    const file=(event.target as HTMLInputElement).files[0]
    this.gameData.get('image').patchValue(file)
    this.gameData.get('image').updateValueAndValidity();
  }

  onSubmit(){
    const category = this.gameData.value.category
    const creditPrice= this.gameData.value.creditPrice
    const cashPrice = this.gameData.value.cashPrice
    const description= this.gameData.value.description
    const image=  this.gameData.value.image
    console.log(this.gameData.value);
    const formData = new FormData();
    formData.append('category', category);
    formData.append('creditPrice', creditPrice);
    formData.append('cashPrice', cashPrice);
    formData.append('description', description)
    formData.append('image', image)
  this.gameApi.addGameData(formData).subscribe((result)=>{

  },
  err=>{
    console.error(err);
    
  }
  );
  }

  editGame(id,i){
    this.gameId=id;
    this.editGameCheck=true;
   this.gameData.get('description').setValue(this.allGames[i].description);
   this.gameData.get('category').setValue(this.allGames[i].category);
   this.gameData.get('creditPrice').setValue(this.allGames[i].creditPrice);
   this.gameData.get('cashPrice').setValue(this.allGames[i].cashPrice);
   this.gameData.get('image').setValue(this.allGames[i].imagePath);
  console.log(this.gameData.value);
  

   
  }
  onEdit(){
    const category = this.gameData.value.category
    const creditPrice= this.gameData.value.creditPrice
    const cashPrice = this.gameData.value.cashPrice
    const description= this.gameData.value.description
    const image=  this.gameData.value.image
    console.log(this.gameData.value);
    // const formData = new FormData();
    // formData.append('category', category);
    // formData.append('creditPrice', creditPrice);
    // formData.append('cashPrice', cashPrice);
    // formData.append('description', description);
    // formData.append('image', image);
   const formData = {
     category ,
     creditPrice,
     cashPrice ,
     description,
    image
   }
    this.gameApi.editGameData(this.gameId,formData).subscribe((res:any)=>{
      console.log(res);
      
    },
    err=>{
      console.log(err);
      
    }
    )
  }
}
