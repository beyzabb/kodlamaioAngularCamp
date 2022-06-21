import { MessageService } from 'primeng/api';
import { ColorService } from './../../../services/color.service';
import { Color } from './../../../models/color';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers:[MessageService]
})
export class ColorComponent implements OnInit {
  colors:Color[]
  constructor(private colorService:ColorService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getColors()
  }
  getColors(){
    this.colorService.getColorss().subscribe(data=>{
      this.colors=data
    })
  }
  getSelectedColorId(color:Color){
    window.location.href=`cars/colorId/${color.id}`
  }
  deleteColor(val:number){
    if(confirm("Are you sure want to delete?")){
      this.colorService.deleteColorr(val).subscribe()
    }
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Successfully Deleted!',
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

}
