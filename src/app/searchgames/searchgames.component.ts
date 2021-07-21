import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApistoreService } from '../apistore.service';

@Component({
  selector: 'app-searchgames',
  templateUrl: './searchgames.component.html',
  styleUrls: ['./searchgames.component.css']
})
export class SearchgamesComponent implements OnInit {
allGameList=[];
gameIdArr=[];
data:any;
displayContent:boolean= false;
 
  pat:string = ''
  toggleDisplay:boolean = false;
  display(){
    this.displayContent = true;

  }
  close(){
    this.displayContent = false
  }
getGameDetails(Game,i){
  this.pat=Game;
  this.router.navigate(['items',this.gameIdArr[i]]);
}
  toggle(){
    this.toggleDisplay = true;
  }
 checkPat(sen:string){
    let regexPat = new RegExp(this.pat.trim(),'i')
    return regexPat.test(sen)
  }
  constructor(private allGameService:ApistoreService,private router:Router) { }

  ngOnInit(): void {
    this.allGameService.getAllGames().subscribe((res)=>{
    this.data=res;
    this.data.forEach(element => {
      this.allGameList.push(element.description);
      this.gameIdArr.push(element._id);
      
    });
    // console.log(this.allGameList);
    
    
    
    })
    
  }

}
