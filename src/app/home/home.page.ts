import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

import { PgAddPhonePage } from '../pg-add-phone/pg-add-phone.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class HomePage {
  arrPhones = [];

  constructor(
    private navCtrl: NavController,
    public modalController: ModalController,
  ) {
    for (let i = 0; i < 10; i++){
      this.arrPhones.push('');
    }
  }

  openDetails() {
    this.navCtrl.navigateForward('/pg-details');
  }

  async addPhone() {
    const modal = await this.modalController.create({
        component: PgAddPhonePage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log( data.reload );
  }
}
