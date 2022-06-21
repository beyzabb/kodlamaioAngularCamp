import { AdditionalService } from 'src/app/models/additionalService';
import { CartService } from './../../../services/cart.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[MessageService]
})
export class CarComponent implements OnInit {
  cars:Car[]
  selectedColorId:number
  selectedBrandId:number
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private messageService:MessageService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getCarsByBrand()
    this.getCarsByColor()
  }



  getCarsByColor(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedColorId=params['id'];
    })
    if(this.selectedColorId==undefined){
      this.carService.getCarss().subscribe(data => {
        this.cars = data;
      })
    }
    else{
      this.carService.getCarByColor(this.selectedColorId).subscribe(data =>{
        this.cars = data
        console.log(this.selectedColorId)
      })
    }
  }

  getCarsByBrand(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedBrandId=params['id'];
    })
    if(this.selectedBrandId==undefined){
      this.carService.getCarss().subscribe(data => {
        this.cars = data;
      })
    }
    else{
      this.carService.getCarByBrand(this.selectedBrandId).subscribe(data =>{
        this.cars = data
        console.log(this.selectedBrandId)
      })
    }
  }

  getCars(){
    this.carService.getCarss().subscribe(data=>{
      this.cars=data
    })
  }

  deleteCar(val:number){
    if(confirm("Are you sure want to delete?")){
      this.carService.deleteCarss(val).subscribe()
    }
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Successfully Deleted!'});
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

  getCarsById(car:Car){
    window.location.href=`cars/carId/${car.id}`
  }

  rentThisCar(car:Car){
    window.location.href=`cars/rentCar/${car.id}`
  }
  addToCart(car:Car){
    this.cartService.addToCart(car)
  }

}
