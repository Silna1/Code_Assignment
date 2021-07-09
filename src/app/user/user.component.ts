import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

 title = 'program';
 public selectedId :any;
 p: number = 1;
 public data:any = []
 public data1:any =[]
 public userData:any =[]
 variable ='https://gorest.co.in/public-api/users';
 constructor(private router: Router,private http: HttpClient,private route: ActivatedRoute) {
 }

 ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.selectedId = id;
    console.log(this.selectedId)
  
   }


  getData(){
    const url ='https://gorest.co.in/public-api/users'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
 
  UserClicked(userDetails:any){
  /*  console.log(id)
    const url = `${this.variable}/${id}`;
    this.http.get(url).subscribe((res)=>{
      this.data1 = res
      console.log(this.data1)
    })*/
    console.log(userDetails)
     this.router.navigate(['/userDetails',userDetails]);
 }

}
