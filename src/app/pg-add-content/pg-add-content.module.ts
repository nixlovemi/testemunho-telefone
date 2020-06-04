import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgAddContentPageRoutingModule } from './pg-add-content-routing.module';

import { PgAddContentPage } from './pg-add-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgAddContentPageRoutingModule
  ],
  declarations: [PgAddContentPage]
})
export class PgAddContentPageModule {}
