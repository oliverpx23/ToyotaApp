import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UserService } from 'src/app/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  name: string;
  email: string;



  constructor(private modalService: NgbModal, 
    private _user: UserService,
    private afAuth: AngularFireAuth, 
    private router: Router) {

    this.name = _user.nombre;
    this.email = _user.email;
  }


  mymessages: any[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Oliver Pots',
      subject: 'Prueba!',
      time: '9:30 AM'
    }
  ];


  logout() {
    this.afAuth.auth.signOut().then(    );
    this.cerrarsesion();
  }

  cerrarsesion()
  {

    localStorage.removeItem('email');
    localStorage.removeItem('name');
    window.location.href = 'http://localhost:4200/authentication';
  }



  ngAfterViewInit() {}
}
