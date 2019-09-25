import { Component, OnInit } from '@angular/core';

import { GlobleCommonService } from "../../core/services/globle-common.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileImg = '../demo/assets/newwhite.jpg';
  constructor(
    private globleCommon : GlobleCommonService
  ) { }

  ngOnInit() {
      this.globleCommon.sendGetRequest("abc/vhhf",{}).subscribe(data=>{
        console.log("data");
      })
  }

}
