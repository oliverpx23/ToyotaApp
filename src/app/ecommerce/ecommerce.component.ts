import { Component, OnInit, HostListener } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styles: []
})
export class EcommerceComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) {}

  tabStatus = 'justified';

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;

  options = {
    theme: 'light', // two possible values: light, dark
    dir: 'ltr', // two possible values: ltr, rtl
    layout: 'horizontal', // fixed value. shouldn't be changed.
    sidebartype: 'full', // fixed value. shouldn't be changed.
    sidebarpos: 'absolute', // two possible values: fixed, absolute
    headerpos: 'absolute', // two possible values: fixed, absolute
    boxed: 'boxed', // two possible values: full, boxed
    navbarbg: 'skin2', // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
    logobg: 'skin2' // six possible values: skin(1/2/3/4/5/6)
  };

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/classic']);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;
      default:
    }
  }
}
