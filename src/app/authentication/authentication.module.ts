import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';

import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';


import { AuthenticationRoutes } from './authentication.routing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AuthenticationModule {
  
}
