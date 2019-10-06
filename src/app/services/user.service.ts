import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  email: string;
  nombre: string;

  constructor() { 

    this.cargarUserStorage()
  }


  getuser()
  {

  }

  cargarUserStorage() {

    this.email = localStorage.getItem('email');
    this.nombre = localStorage.getItem('name');
    
  }
}
