import { Component, ViewChild, OnInit } from '@angular/core';
import {MatSidenavModule } from '@angular/material/sidenav';
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
  @ViewChild('MatSidenavModule') MatSidenavModule: any;
// tslint:disable-next-line: max-line-length
  public  isLargeScreen: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result: BreakpointState) => result.matches));
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
