import { Component } from '@angular/core';
import { Outh } from '../outh';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
user:any={}
constructor(private Outh:Outh){}
signin(){
     this.Outh.login(this.user).subscribe(tem=>{
      if(tem=="ok"){
        location.href='dashboard'
     
        localStorage.setItem('username',this.user.username)
      }
      else{
        alert("failed")
      }
      this.user={}
     })
}
}
