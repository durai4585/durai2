import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { parseString } from 'xml2js';
import { XmlObjects } from 'xml-objects';

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

       console.log(results[2]);
       // console.log(print());
             // console.log(this.print(results[2]));
        console.log(JSON.stringify(parseString(results[2].rss.channel.item)));
    
      console.log(this.pageNumber);
        
    });
  }
    


}
