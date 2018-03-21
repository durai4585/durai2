import { Component, OnInit } from '@angular/core';


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";

import { LatestStoryService } from "../latest-story.service";

@Component({
  selector: 'app-latest-story',
  templateUrl: './latest-story.component.html',
  styleUrls: ['./latest-story.component.css']
})
export class LatestStoryComponent implements OnInit {

 posts = [];
 pageNumber=1;

  constructor(private http: HttpClient,private latestStoryService : LatestStoryService) {}


  ngOnInit( ) {
    this.getData();
  }
  onScrollDown() {
    this.pageNumber += 1;    
    this.getData();
  }

  getData() {
   console.log(this.pageNumber);
    this.latestStoryService.getScreenShots(this.pageNumber).subscribe(results => {
      let list = [];  

      results[0].forEach(element => {
       console.log(element); 
        list.push({
          "title":element.title,
          "image":element.images.normal,
          "url":element.html_url,
          "views_count":element.views_count
        });
      });
       results[1].forEach(element => {
         console.log(element); 
        list.push( {
         "title":element.title,
          "image":element.images.normal,
          "url":element.html_url,
          "views_count":element.views_count
        });
      });

      list.forEach(element => {
      
        this.posts.push(element);
      });
     
      console.log(this.pageNumber);
    });
  }


}
