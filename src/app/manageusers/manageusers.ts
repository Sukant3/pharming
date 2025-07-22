import { Component } from '@angular/core';
import { Outh } from '../outh';

@Component({
  selector: 'app-manageusers',
  standalone: false,
  templateUrl: './manageusers.html',
  styleUrl: './manageusers.css'
})
export class Manageusers {
users:any[]=[]
user:any={}
constructor(private Outh:Outh){
  this.refresh()
}

refresh(){
  this.Outh.users().subscribe(temp=>this.users=temp)
}
deleteUser(id:any){
  this.Outh.deleteUser(id).subscribe(x=>{alert("User deleted");
     this.refresh()
  });
 
}
updateUser(){
  this.Outh.updateUser(this.user._id,this.user).subscribe(x=>{
  if(x=='failed'){
    alert("username already exist")
  }
  else
  { alert("user updated");
    this.refresh()
    this.user={}
  }

})  

}

edit(id:any){
  let user=this.users.find(x=>x._id==id)
  this.user={...user}
}
}
