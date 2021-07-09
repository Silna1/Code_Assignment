import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = "my name is silna"
  public selectedId :any;
  //posts = this.getData2();
  public data:any = []
  variable ='https://gorest.co.in/public-api/users';
  constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute) {
  }
 
  ngOnInit(): void {
     let id = this.route.snapshot.params['user_id'];
     this.selectedId = id;
     console.log(this.selectedId)
     this.getData2();
    }


  getData2(){
    const url ='https://gorest.co.in/public-api/posts'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  getData21(id:number){
    const url = `${this.variable}/${id}`;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  ViewComments(){
    /* const url ='https://gorest.co.in/public-api/comments'
     this.http.get(url).subscribe((res)=>{
       this.userData = res
       console.log(this.userData)*/
       this.router.navigate(['/comment']);
   }

}