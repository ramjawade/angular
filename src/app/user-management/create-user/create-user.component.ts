import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { CreateUserService} from './create-user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user : User;
  constructor(
    private createUserService : CreateUserService
  ) { }
  

  ngOnInit() {
    this.user = new User();
    this.user.id = "1";
    this.user.userName = "Yash";
    this.user.email = "YashJawade@gmail.com"
  }

  createUser() : void {
      this.createUserService.createUser(this.user).subscribe( function(result){
          if(result){

          }
      });
  }

}
