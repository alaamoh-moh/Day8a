import { Component , Output ,EventEmitter } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
constructor(private Userservice: UsersService){}
 users:any = [] ;
 getusers(){
  this.users= this.Userservice.usersdata
 }

 ngOnInit():void{
  this.getusers();
 }
 
adduser(par:any){
  this.users.push({
    name:par,
  city:"alex",
  id:2,
  })
}

delet(index:number){
  this.users.splice(index,1);


}

usertrans(){
  this.users;
}
};

