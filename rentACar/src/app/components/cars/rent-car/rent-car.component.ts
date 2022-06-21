import { CartService } from './../../../services/cart.service';
import { AdditionalServicesService } from './../../../services/additional-services.service';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../../services/car.service';
import { Car } from './../../../models/cars';
import { Component, OnInit } from '@angular/core';
import { AdditionalService } from 'src/app/models/additionalService';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  additionalServices:AdditionalService[]
  cars:Car[]
  selectedCarId:number
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private additionalServicesService:AdditionalServicesService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getRentCarsById()
    this.getAdditionalServices()
  }

  getRentCarsById(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedCarId=params['id'];
    })
    if(this.selectedCarId==undefined){
      this.carService.getCarss().subscribe(data => {
        this.cars = data;
      })
    }
    
    else{
      this.carService.getRentCarById(this.selectedCarId).subscribe(data =>{
        this.cars = data
        console.log(this.selectedCarId)
      })
    }
  }
  getAdditionalServices(){
    this.additionalServicesService.getAdditionalServicess().subscribe(data=>{
      this.additionalServices=data
    })
  }
  addToCart2(additionalService:AdditionalService){
    this.cartService.addToCart2(additionalService)
  }

}
