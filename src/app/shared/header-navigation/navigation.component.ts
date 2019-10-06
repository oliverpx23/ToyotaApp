import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  constructor(private modalService: NgbModal) {}


  mymessages: any[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Oliver Pots',
      subject: 'Prueba!',
      time: '9:30 AM'
    }
  ];

  ngAfterViewInit() {}
}
