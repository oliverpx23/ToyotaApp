import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TallerComponent } from './taller.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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
    component: TallerComponent
  }
];

@NgModule({
  declarations: [
    TallerComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAO6cKgrVa4LFyQVvSQuXQdAtj3lGbbw2g'
    }),
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class TallerModule { }
