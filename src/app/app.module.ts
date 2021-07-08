import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
 declarations: [
   AppComponent,
   PostComponent,
   CommentComponent,
   UserComponent,
   UserDetailsComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule,
   NgxPaginationModule,
   AppRoutingModule,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }