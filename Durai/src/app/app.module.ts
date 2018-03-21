import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HandPickedComponent } from './hand-picked/hand-picked.component';
import { HeaderComponent } from './header/header.component';
import { LatestStoryComponent } from './latest-story/latest-story.component';
import { LoginComponent } from './login/login.component';

import { LatestStoryService } from './latest-story.service';

@NgModule({
  declarations: [
    AppComponent,
    HandPickedComponent,
    HeaderComponent,
    LatestStoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, InfiniteScrollModule , FormsModule, HttpClientModule
  ],
  providers: [LatestStoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
