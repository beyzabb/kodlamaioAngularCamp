import { Color } from '../../models/color';
import { MessageService } from 'primeng/api';
import { ColorService } from '../../services/color.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css'],
  providers:[MessageService]
})
export class AddColorComponent implements OnInit {
  color:Color=new Color()
  colors:Color[]
  colorAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private colorService:ColorService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }
  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      name:["",Validators.required],
      image:["./assets/colors_images/",Validators.required],
      
    })
  }
  add(){
    if(this.colorAddForm.valid){
      this.color=Object.assign({},this.colorAddForm.value)
    }
    this.colorService.addColors(this.color).subscribe(data=>{
      
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully '+this.color.name+' Added!',
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    })
  }

}
