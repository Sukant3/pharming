import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private router:Router){

  }
logout(){
  localStorage.removeItem('username')
  this.router.navigateByUrl('/')
}
}
