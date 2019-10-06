import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { SoporteComponent } from './soporte.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Soporte',
      urls: [
        { title: 'Principal', url: '/cuentas' },
        { title: 'Soporte' }
      ]
    },
    component: SoporteComponent
  }
];
@NgModule({
  declarations: [
    SoporteComponent
  ],
  imports: [
    FormsModule, 
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class SoporteModule {

}
