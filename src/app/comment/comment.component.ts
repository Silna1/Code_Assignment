import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment = "My name is comment";
  constructor(private router: Router) { }


  ngOnInit(): void {
  /*  this.comments.getComments().subscribe((data : any[])=>{
      console.log(data);
      this.comment = data;
  })*/
  console.log("silna in comment")
  }

}
