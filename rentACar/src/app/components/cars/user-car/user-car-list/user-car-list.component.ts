import { Car } from './../../../../models/cars';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-car-list',
  templateUrl: './user-car-list.component.html',
  styleUrls: ['./user-car-list.component.css']
})
export class UserCarListComponent implements OnInit {
  cars:Car[]
  constructor() { }

  ngOnInit(): void {
  }

}
