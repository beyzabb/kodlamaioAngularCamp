import { MessageService } from 'primeng/api';
import { Brand } from '../../../models/brand';
import { BrandService } from '../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
  providers: [MessageService]
})
export class AddBrandComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private brandService:BrandService,private messageService:MessageService) { }
  
  brandAddForm:FormGroup
  car:Brand=new Brand()
  cars:Brand[]

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.brandAddForm=this.formBuilder.group({
      name:["",Validators.required],
      image:["./assets/logos/",Validators.required],
      
    })
  }

  add(){
    if(this.brandAddForm.valid){
      this.car=Object.assign({},this.brandAddForm.value)
    }
    this.brandService.addBrands(this.car).subscribe(data=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Successfully Added!'});
    })
    location.reload()
  }
  

  
}
