import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApistoreService {

  constructor(private http: HttpClient) { }


  getAllGames(){
    return this.http.get('http://127.0.0.1:3000/items');
  }
  getGameDetails(id){
    return this.http.get<any>('http://127.0.0.1:3000/items/'+id);
  }
  addGameData(data){
    return this.http.post<any>('http://127.0.0.1:3000/items',data);
  }
}
