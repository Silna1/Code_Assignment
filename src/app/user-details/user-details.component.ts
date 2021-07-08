import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router,ActivatedRoute  } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
public data:any = []

variable ='https://gorest.co.in/public-api/users';
Name = this.getData()


  constructor(private router: Router,private http: HttpClient ,private activatedroute:ActivatedRoute) {
    
   
  }

  ngOnInit(){
}

  getData(){
    const url ='https://gorest.co.in/public-api/users'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  getData1(id:number){
    const url = `${this.variable}/${id}`;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

 viewPost(){
    /* const url ='https://gorest.co.in/public-api/posts'
     this.http.get(url).subscribe((res)=>{
       this.userData = res
       console.log(this.userData)*/
       this.router.navigate(['/post']);
   }

}
