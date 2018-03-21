import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";


@Injectable()
export class LatestStoryService {

  constructor(private _http: HttpClient) { }
  
  getScreenShots(private pageNumber : number):Observable<any[]>{
  
  return forkJoin([
  
   	this._http.get('https://api.dribbble.com/v1/shots?sort=recent&access_token=0b8f0bbf2352be625a2e69211592aed5003b101d7fc01c40d2928e1e3e39bfe1&page='+this.pageNumber),
    this._http.get('https://api.dribbble.com/v1/shots?access_token=0b8f0bbf2352be625a2e69211592aed5003b101d7fc01c40d2928e1e3e39bfe1&page='+this.pageNumber)
  
  ]);
  
  }
}
