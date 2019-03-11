import { Component, OnInit } from '@angular/core';
import { User} from './../create-user/user';
import { UserListingService }  from './user-listing.service';
 
@Component({
  selector: 'app-listing-user',
  templateUrl: './listing-user.component.html',
  styleUrls: ['./listing-user.component.css']
})
export class ListingUserComponent implements OnInit {
  columnDefs = [
    {headerName: 'User Name', field: 'userName' },
    {headerName: 'Email', field: 'email' },
    {headerName: 'Role', field: 'role'}
];
rowData: any;

  constructor(
    private usserListingService : UserListingService
  ) { }

  ngOnInit() {
    this.usserListingService.getAllUser()
    .subscribe(data=> this.rowData= data);
  }

}
