import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosComponent } from './pagos.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pagos',
      urls: [
        { title: 'Principal', url: '/cuentas' },
        { title: 'Pagos' }
      ]
    },
    component: PagosComponent
  }
];

@NgModule({
  declarations: [
    PagosComponent
  ],
  imports: [
    FormsModule, 
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class PagosModule { }
