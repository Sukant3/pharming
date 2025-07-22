import { Component } from '@angular/core';
import { Outh } from '../outh';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
user:any={}
constructor(private Outh:Outh){}
signup(){
    this.Outh.signup(this.user).subscribe(tem=>{alert("user Created")
      this.user={}
    })

  }
}

