import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router:Router, private afAuth: AngularFireAuth) {

  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }


  login(user: string, password: string)
  {
    if(user === 'oliver' && password === '123456')
    {
      this.router.navigate(['/cuentas']);
    }
    else
    {
      Swal.fire('Usuario y/o Contraseña incorrectos','','error');
    }
  }

  logingoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (resp: any) => {
        console.log(resp);
        this.saveUserStorage(resp.additionalUserInfo.profile.email,resp.additionalUserInfo.profile.name );
        window.location.href = 'http://localhost:4200/cuentas';
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    );
  }
  logout() {
    this.afAuth.auth.signOut();
  }



  saveUserStorage(email: string,name: string )
  {
    localStorage.setItem('email',email);
    localStorage.setItem('name',name);
  }

}
