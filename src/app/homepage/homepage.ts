import { Component } from '@angular/core';
import { Data } from '../data';
import { Post } from '../post';
import { Outh } from '../outh';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  
  constructor(private router:Router){
    if(localStorage.getItem('username')){
      this.router.navigateByUrl('/dashboard')
    }
  }
  
  a=true;

}
