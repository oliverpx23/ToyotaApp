import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CuentasComponent } from './cuentas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cuenta',
      urls: [
        { title: 'Principal', url: '/home' },
        { title: 'Cuentas' }
      ]
    },
    component: CuentasComponent
  }
];

@NgModule({
  imports: [
    FormsModule, 
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CuentasComponent
  ]
})
export class CuentasModule {


}
