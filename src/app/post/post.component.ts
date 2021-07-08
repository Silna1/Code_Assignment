import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = "my name is silna"
  constructor(private router: Router) { }


  ngOnInit(): void {
  /*  this.posts.getPosts().subscribe((data : any[])=>{
      console.log(data);
      this.post = data;
  })*/
  console.log("silna in post")
  }

  ViewComments(){
    /* const url ='https://gorest.co.in/public-api/posts'
     this.http.get(url).subscribe((res)=>{
       this.userData = res
       console.log(this.userData)*/
       this.router.navigate(['/comment']);
   }

}