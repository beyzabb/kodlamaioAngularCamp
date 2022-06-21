import { Color } from './../../../models/color';
import { ColorService } from './../../../services/color.service';
import { BrandService } from './../../../services/brand.service';
import { Brand } from './../../../models/brand';
import { MessageService } from 'primeng/api';
import { CarService } from './../../../services/car.service';
import { Car } from 'src/app/models/cars';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
  providers: [MessageService],
})
export class AddCarComponent implements OnInit {
  colors: Color[];
  brands: Brand[];
  car: Car;
  carAddForm: FormGroup;
  selectedId:number

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      image: ['./assets/car_images/', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getColors() {
    this.colorService.getColorss().subscribe((data) => {
      this.colors = data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  add() {
    let selectedBrand=this.brands.find(element => element.id==this.carAddForm.value.brandId)
    let selectedColor=this.colors.find(element => element.id==this.carAddForm.value.colorId)
    this.carAddForm.value.brandId=parseInt(this.carAddForm.value.brandId)
    this.carAddForm.value.colorId=parseInt(this.carAddForm.value.colorId)
    this.carAddForm.value.brandName=selectedBrand.name
    this.carAddForm.value.colorName=selectedColor.name
    if (this.carAddForm.valid) {
      this.car = Object.assign({}, this.carAddForm.value);
    }
    this.carService.addCars(this.car).subscribe((data) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Added!',
      });
      data.brandName;
    });
    location.reload();
  }

  canExit(): boolean{
    if(confirm('Do you want to continue?')){
      return true;
    }
    else{
      return false;
    }
  }
}


