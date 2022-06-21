import { ColorService } from './../../../../services/color.service';
import { Color } from './../../../../models/color';
import { BrandService } from './../../../../services/brand.service';
import { Brand } from './../../../../models/brand';
import { Car } from './../../../../models/cars';
import { CarService } from './../../../../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css'],
  providers: [MessageService],
})
export class EditCarComponent implements OnInit {
  carEditForm: FormGroup;
  car: Car = new Car();
  brands:Brand[]
  colors:Color[]
  cars: Car[];
  selectedId: number;
  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private brandService:BrandService,
    private colorService:ColorService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getEditCar();
  }

  createCarEditForm() {
    this.carEditForm = this.formBuilder.group({
      id: [this.car.id, Validators.required],
      brandName: [this.car.brandName, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      colorName: [this.car.colorName, Validators.required],
      colorId: [this.car.colorId, Validators.required],
      image: [this.car.image, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      description: [this.car.description, Validators.required],
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  getColors() {
    this.colorService.getColorss().subscribe((data) => {
      this.colors = data;
    });
  }

  getEditCar() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedId = params['id'];
    });
    this.carService.getCarById(this.selectedId).subscribe((data) => {
      this.car = data;
      this.createCarEditForm();
    });
  }

  edit() {
    let selectedBrand=this.brands.find(element => element.id==this.carEditForm.value.brandId)
    let selectedColor=this.colors.find(element => element.id==this.carEditForm.value.colorId)
    this.carEditForm.value.brandId=parseInt(this.carEditForm.value.brandId)
    this.carEditForm.value.colorId=parseInt(this.carEditForm.value.colorId)
    this.carEditForm.value.brandName=selectedBrand.name
    this.carEditForm.value.colorName=selectedColor.name
    if (this.carEditForm.valid) {
      this.car = Object.assign({}, this.carEditForm.value);
    }
    this.carService.updateCar(this.car).subscribe((data) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Updated!',
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    });
  }

  getBrandById(brand:Brand){

  }
}
