import { Login } from './../../../models/login';
import { Router } from '@angular/router';
import { AuthServiceService } from './../../../services/auth-service.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  loginModel:Login
  loginForm:FormGroup
  constructor(private formBuilder:FormBuilder, private messageService:MessageService,private authService:AuthServiceService,private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      
    })
  }

  login(){
    if(this.loginForm.valid){
      this.loginModel=Object.assign({},this.loginForm.value)
    }
    this.authService.loginMember(this.loginModel).subscribe(data=>{
        if(data.length>0) {
          localStorage.setItem("token","ali")
         // localStorage.setItem("token", "jfjskbjsb123fsjbfs")
          this.messageService.add({
            severity:'success',
            summary:' Login successful',
          })
          this.router.navigate(['car/carList']);
        }
        else {
          this.messageService.add({
            severity:'error',
            summary:'Email or password is wrong!',
          })
        }

    })
  }

}
