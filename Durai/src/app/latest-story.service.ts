import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { parseString } from 'xml2js';
import * as xml2js from "xml2js";
import {map}  from 'rxjs/add/operator/map';

@Injectable()
export class LatestStoryService {
  constructor(private _http: HttpClient) { }
   
  getScreenShots(private page : number):Observable<any[]>{  
  return forkJoin([
  
   	this._http.get('https://api.dribbble.com/v1/shots?sort=recent&access_token=0b8f0bbf2352be625a2e69211592aed5003b101d7fc01c40d2928e1e3e39bfe1&page='+ page),
    this._http.get('https://api.dribbble.com/v1/shots?access_token=0b8f0bbf2352be625a2e69211592aed5003b101d7fc01c40d2928e1e3e39bfe1&page='+ page),
    this._http.get<any[]>('https://www.designernews.co/?format=rss',{
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded') 
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
            , responseType:'text'})


    //https://www.behance.net/v2/users/PerumalUXD/collections?api_key=OGWw0DdyHFb4h9zjKIXAFNKvPG1iJRJ6
    //this._http.get('https://medium.com/feed/topic/digital-design',)
    //https://medium.com/feed/@uxplanet
    
    //&callback=JSONP_CALLBACK
  
  ]);
      
      //{headers: this.getHeaders()}
    private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
    
      private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  
  }
}