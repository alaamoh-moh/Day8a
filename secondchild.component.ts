import { Component ,Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent {
  constructor(private userdata : UsersService){}
  user:any = [] ;
}
