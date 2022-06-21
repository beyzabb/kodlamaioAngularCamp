import { Car } from 'src/app/models/cars';
import { MessageService } from 'primeng/api';
import { Brand } from '../../../models/brand';
import { BrandService } from '../../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [MessageService]
})
export class BrandComponent implements OnInit {
  brands:Brand[]
  constructor(private brandService:BrandService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }

  getSelectedBrandId(brand:Brand){
    window.location.href=`cars/brandId/${brand.id}`
  }
  

  deleteBrand(val:number){
    if(confirm("Are you sure want to delete?")){
      this.brandService.deleteBrandd(val).subscribe()
    }
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Successfully Deleted!'});
    setTimeout(() => {
      location.reload()
    }, 1000);
  }
  
  getBrandId(brand:Brand){
    window.location.href=`editBrand/${brand.id}`
  }

}
