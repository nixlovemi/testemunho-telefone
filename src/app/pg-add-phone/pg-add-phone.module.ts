import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgAddPhonePageRoutingModule } from './pg-add-phone-routing.module';

import { PgAddPhonePage } from './pg-add-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgAddPhonePageRoutingModule
  ],
  declarations: [PgAddPhonePage]
})
export class PgAddPhonePageModule {}
