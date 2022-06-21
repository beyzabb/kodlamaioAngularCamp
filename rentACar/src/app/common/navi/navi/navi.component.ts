import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private authService:AuthServiceService) {}
  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }

  logOut(){
    this.authService.logOut()
  }
}
