import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { RegisterComponent } from './components/login/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RentCarComponent } from './components/cars/rent-car/rent-car.component';
import { EditCarComponent } from './components/cars/update-car/edit-car/edit-car.component';
import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { EditBrandComponent } from './components/brands/edit-brand/edit-brand.component';
import { AddBrandComponent } from './components/brands/add-brand/add-brand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/cars/car/car.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { WarningGuard } from './guards/warning.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars/colorId/:id",component:CarComponent},
  {path:"addBrand",component:AddBrandComponent},
  {path:"editBrand/:id",component:EditBrandComponent},
  {path:"cars/brandId/:id",component:CarComponent},
  {path:"cars/carId/:id",component:EditCarComponent},
  {path:"addColor",component:AddColorComponent},
  {path:"car/addCar",component:AddCarComponent, canActivate:[LoginGuard], canDeactivate:[WarningGuard]}, 
  {path:"car/carList",component:CarComponent},
  {path:"cars/rentCar/:id",component:RentCarComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"cart-detail",component:CartDetailComponent},
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
