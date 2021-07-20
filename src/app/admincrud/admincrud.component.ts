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
  p: number = 1;
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
      image:['',[Validators.required]]
    })

    this.gameApi.getAllGames().subscribe((result:any)=>{
      result.forEach(element => {
        
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
    console.log(result);
    this.allGames = []
    this.gameApi.getAllGames().subscribe((result:any)=>{
      result.forEach(element => {
        console.log(element);
        this.allGames.push(element);
      });
      
    }, err=>{
      console.error(err);
    })
  },
  err=>{
    console.error(err);
    
  }
  );
  }

  editGame(id){
    this.gameId=id;
    let selectedGame = this.allGames.find(x=>x._id===id)
    this.editGameCheck=true;
   this.gameData.get('description').setValue(selectedGame.description);
   this.gameData.get('category').setValue(selectedGame.category);
   this.gameData.get('creditPrice').setValue(selectedGame.creditPrice);
   this.gameData.get('cashPrice').setValue(selectedGame.cashPrice);
   this.gameData.get('image').setValue(selectedGame.imagePath);
  console.log(this.gameData.value);
  

   
  }
  onEditSubmit(){
    const category = this.gameData.value.category
    const creditPrice= this.gameData.value.creditPrice
    const cashPrice = this.gameData.value.cashPrice
    const description= this.gameData.value.description
    const image=  this.gameData.value.image
    console.log(this.gameData.value);
    let formData
    if(typeof image==='object'){

      formData = new FormData();
      formData.append('category', category);
      formData.append('creditPrice', creditPrice);
      formData.append('cashPrice', cashPrice);
      formData.append('description', description);
      formData.append('image', image);
    }
    else{

       formData = {
         category ,
         creditPrice,
         cashPrice ,
         description,
        image
       }
    }
    this.gameApi.editGameData(this.gameId,formData).subscribe((res:any)=>{
      console.log(res);
      this.allGames = []
    this.gameApi.getAllGames().subscribe((result:any)=>{
      result.forEach(element => {
        console.log(element);
        this.allGames.push(element);
      });
      
    }, err=>{
      console.error(err);
    })
    },
    err=>{
      console.log(err);
    }
    )
    
  }
  deleteGameData(id){
    this.gameApi.deleteGame(id).subscribe((res:any)=>{
      this.allGames = []
    this.gameApi.getAllGames().subscribe((result:any)=>{
      result.forEach(element => {
        console.log(element);
        this.allGames.push(element);
      });
      
    }, err=>{
      console.error(err);
    })
    },
    err=>{
      console.log(err);
    }
    )
  }
  formReset(){
    this.editGameCheck=false;
    this.gameData.reset();
  }
}
