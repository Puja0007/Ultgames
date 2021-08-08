import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { X } from 'angular-feather/icons';
import { RequestObj } from './request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})


export class RequestListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  reqObjArr: RequestObj[] =[]
  games = []
  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:3000/sell')
      .subscribe(result => {
        let gameIdArr = []
        result.forEach(x => {
          gameIdArr.push(x.allItems.itemID)
          this.reqObjArr.push({
            userName: x.userName,
            gameName: '',
            paymentMode: x.paymentType,
            amount: x.totalPrice,
            status: x.status,
            gameId:x.allItems.itemID,
            requestId:x._id
          })
        })

        this.http.post<any[]>('http://127.0.0.1:3000/items/GetMultipleGames', { gameIdArr }).
          subscribe(games => {
            this.games = games
            this.reqObjArr.forEach(r=>{
              r.gameName = games.find(g=>g._id=== r.gameId).description
            })

            // console.log(this.reqObjArr);
            
          }, err=>{
            console.log(err);
          })


      }, err => {
        console.log(err);

      })
  }

  changeStatus(status,i){
    this.http.patch('http://127.0.0.1:3000/sell/'+this.reqObjArr[i].requestId, {status})
    .subscribe(result=>{
      this.reqObjArr[i].status = status
    },
    err=>{
      console.log(err);
    })
  }

}
