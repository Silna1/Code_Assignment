import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment = "My name is comment";
  posts = this.getData3();
  public data:any = []
  constructor(private router: Router,private http: HttpClient) { }


  ngOnInit(): void {
  /*  this.comments.getComments().subscribe((data : any[])=>{
      console.log(data);
      this.comment = data;
  })*/
  console.log("silna in comment")
  }

  getData3(){
    const url ='https://gorest.co.in/public-api/posts'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

}
