import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any='';
  password:any='';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  register:any=[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
 
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

  
    if (this.loginForm.invalid) {
        return;
    }

      this.register=localStorage.getItem("formvalue");
  
      if(this.register.role=='user')
      {
        localStorage.setItem("username",this.username);
        localStorage.setItem("password",this.password);
        this.loading = true;
        this.router.navigate(['dashboard']);
      }

    
      
        this.router.navigate(['AdminDash']);

      
}

}
