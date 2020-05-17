import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgDetailsPageRoutingModule } from './pg-details-routing.module';

import { PgDetailsPage } from './pg-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgDetailsPageRoutingModule
  ],
  declarations: [PgDetailsPage]
})
export class PgDetailsPageModule {}
