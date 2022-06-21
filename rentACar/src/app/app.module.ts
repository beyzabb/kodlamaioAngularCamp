import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi/navi.component';
import { BrandComponent } from './common/sidebar/brand/brand.component';
import { AddBrandComponent } from './components/brands/add-brand/add-brand.component';
import { EditBrandComponent } from './components/brands/edit-brand/edit-brand.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import { ColorComponent } from './common/sidebar/color/color.component';
import { CarComponent } from './components/cars/car/car.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { EditCarComponent } from './components/cars/update-car/edit-car/edit-car.component';

import {TabMenuModule} from 'primeng/tabmenu';
import { UserCarListComponent } from './components/cars/user-car/user-car-list/user-car-list.component';
import { RentCarComponent } from './components/cars/rent-car/rent-car.component';
import { CartSummaryComponent } from './common/cart-summary/cart-summary/cart-summary.component';
import {DropdownModule} from 'primeng/dropdown';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    AddBrandComponent,
    EditBrandComponent,
    ColorComponent,
    CarComponent,
    AddColorComponent,
    AddCarComponent,
    EditCarComponent,
    UserCarListComponent,
    RentCarComponent,
    CartSummaryComponent,
    LoginComponent,
    RegisterComponent,
    CartDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    AccordionModule,
    TabMenuModule,
    DropdownModule
    
    
  ],
  providers: [MessageService,
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
