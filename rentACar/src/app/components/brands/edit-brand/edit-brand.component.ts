import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../services/brand.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../../models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css'],
  providers: [MessageService]
})
export class EditBrandComponent implements OnInit {

  brand:Brand= new Brand();
  brands: Brand[];
  brandEditForm:FormGroup;
  selectedId:number;
  constructor(private formBuilder:FormBuilder, 
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEditBrand();
  }
  createbrandEditForm(){
    this.brandEditForm=this.formBuilder.group({
      id:[this.brand.id,Validators.required],
      name:[this.brand.name,Validators.required],
      image:[this.brand.image,Validators.required]
    })
  }

  

  edit(){
    if(this.brandEditForm.valid){
      this.brand=Object.assign({},this.brandEditForm.value)
    }
    this.brandService.updateBrand(this.brand).subscribe(data=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Successfully Updated!'});
      setTimeout(() => {
        location.reload()
      }, 1000);
      
      
    })
    
  }

  
  getEditBrand(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"])
      this.selectedId=params["id"]
    })
    this.brandService.getBrandById(this.selectedId).subscribe(data => {
      this.brand = data
      this.createbrandEditForm()
    })

  }

}
