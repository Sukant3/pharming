import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
constructor(private router:Router){

  }
logout(){
  localStorage.removeItem('username')
  this.router.navigateByUrl('/')
}
}
