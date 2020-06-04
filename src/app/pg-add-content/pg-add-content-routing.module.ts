import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgAddContentPage } from './pg-add-content.page';

const routes: Routes = [
  {
    path: '',
    component: PgAddContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgAddContentPageRoutingModule {}
