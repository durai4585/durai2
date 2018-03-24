import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class LatestStoryService {
  constructor(private _http: HttpClient) { }
   
  getScreenShots(private page : number):Observable<any[]>{  
  return forkJoin([
  
   	this._http.get('https://api.dribbble.com/v1/shots?sort=recent&access_token=0b8f0bbf2352be625a2e69211592aed5003b101d7fc01c40d2928e1e3e39bfe1&page='+ page),
    this._http.get('https://api.dribbble.com/v1/shots?access_token=0b8f0bbf2352be625a2e69211592aed5003b101d7fc01c40d2928e1e3e39bfe1&page='+ page),
    this._http.get('https://www.designernews.co/?format=rss',{
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml') 
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
  , responseType:'text'}),
    this._http.get('https://medium.com/feed/@uxplanet',{
        headers: new HttpHeaders()
        .set('Content-Type', 'text/xml') 
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
        .append('Access-Control-Allow-Origin', '*')
         .append('Access-Control-Allow-Credentials', true)
        //.append('Access-Control-Allow-Headers', "Access-Control-Request-Method")
        .append('Access-Control-Allow-Headers: Content-Type, Authorization, origin, X-PINGOTHER')
  , responseType:'text'})
    

    //this._http.get('https://medium.com/feed/topic/digital-design',)
    //https://medium.com/feed/@uxplanet
  
  ]);
  
  }
}