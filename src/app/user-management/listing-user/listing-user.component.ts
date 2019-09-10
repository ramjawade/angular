import { Component, OnInit } from '@angular/core';
import { User} from './../create-user/user';
import { UserListingService }  from './user-listing.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
 
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
    this.observe()
  }

  observe(){
    this.usserListingService.observeResponce().subscribe((res) =>{
      switch(res.type){
        case HttpEventType.Sent:
          console.log("Request Sent", res);
          break;
        case HttpEventType.ResponseHeader:
          console.log("Response  Header", res);
          break;
        case HttpEventType.DownloadProgress:
          let loaded =  Math.round(res.loaded/ 1025);
          let total = Math.round(res.total/1025);
          console.log(""+loaded+"/"+total+" " + " :" + Math.round((loaded/total)*100) + "%", res);
          break;
        case HttpEventType.Response:
          console.log("full responce loaded", res);
          break;
      }
      // console.log(res);
      // console.log((res.loaded/res.total)*100);
      // const keys = res.headers.keys();
      // let header = keys.map(key =>
      //   `${key}: ${res.headers.get(key)}`);
      // console.log(header)
    })
  }

  onClick(evt){
    this.observe()
  }
}
