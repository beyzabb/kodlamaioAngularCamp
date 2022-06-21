import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Login } from './../../../models/login';
import { authService } from './../../../models/authService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[MessageService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  users: Login[]=[];
  constructor(private formBuilder:FormBuilder,private authService:AuthServiceService, private router:Router,private messageService:MessageService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      fistName: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let user = Object.assign({},this.registerForm.value)
      debugger
      this.authService.registerMember(user).subscribe(response=>{
        
        console.log(response)
      })
      this.messageService.add({
        summary:'Register successful!'
      })
      
    }
  }

}
