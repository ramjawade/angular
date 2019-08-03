import { Component, ViewChild, OnInit } from '@angular/core';
import {MatSidenav } from '@angular/material/sidenav';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
// tslint:disable-next-line: max-line-length
  isLargeScreen: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result: BreakpointState) => result.matches));
  openDrawer: boolean;
  heroes = ['abc', 'ss', 'ssss'];
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.openDrawer = true;

  }

  toggleFilter (): void  {
    this.openDrawer = ! this.openDrawer;
  }

}
