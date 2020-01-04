import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router
    ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  title = 'demo';
  links = [
    {
      name : 'Dashboard',
      link : 'dashboard',
      icon : 'dashboard'
    }, {
      name : 'Home',
      link : 'temp',
      icon : 'home'
    }, {
      name : 'Map',
      link : 'map',
      icon : 'layers'
    }
    , {
      name : 'User Management',
      link : 'user/list',
      icon : 'account_circle'
    },
    {
      name : 'Create User',
      link : 'user/create',
      icon : 'account_circle'
    }, {
      name : 'projects',
      link : 'projects',
      icon : 'power_settings_new'
    }, {
      name : 'Pdf Reader',
      link : 'pdf',
      icon : 'library_books'
    }, {
      name : 'Profile',
      link : 'profile',
      icon : 'library_books'
    }
    // ,{
    //   name :"Contact",
    //   link : "def",
    //   icon : "call"
    // }
  ];

  menuClick(link) {
    this.router.navigateByUrl(link);
  }
}
