import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgAddPhonePage } from './pg-add-phone.page';

const routes: Routes = [
  {
    path: '',
    component: PgAddPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgAddPhonePageRoutingModule {}
