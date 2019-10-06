import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ecommerce',
    },
    component: EcommerceComponent
  }
];



@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class EcommerceModule {

}
