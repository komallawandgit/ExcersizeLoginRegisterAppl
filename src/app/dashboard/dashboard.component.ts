import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  UserName:any=''
  passWord:any=''

  constructor(private router: Router) { }


  ngOnInit(): void {
   this. UserName= localStorage.getItem("username");
  this.passWord=localStorage.getItem("password");

  }
  logout(){
    this.router.navigate(['login']);
  }

}
