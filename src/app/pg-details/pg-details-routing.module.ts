import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgDetailsPage } from './pg-details.page';

const routes: Routes = [
  {
    path: '',
    component: PgDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgDetailsPageRoutingModule {}
