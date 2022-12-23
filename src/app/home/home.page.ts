import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

import { UtilsService } from './../utils.service';
import { PgAddPhonePage } from '../pg-add-phone/pg-add-phone.page';
import { DatabaseService } from './../database.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class HomePage {
  arrPhones     = [];
  displayPhones = [];
  version       = '';
  filterStr     = '';

  constructor(
    private navCtrl: NavController,
    public modalController: ModalController,
    public db: DatabaseService,
    private utils: UtilsService
  ) {
    this.version = this.utils.getAppVersion();
  }

  async ionViewWillEnter() {
    await this.loadPhones();
    this.postFilterPhone(this.filterStr);
  }

  async loadPhones() {
    const allPhones = await this.db.getAllPhones();
    this.arrPhones     = allPhones;
    this.displayPhones = allPhones;
  }

  openDetails(ddd: string, phone: string) {
    this.navCtrl.navigateForward('/pg-details/' + ddd + '/' + phone);
  }

  async addPhone() {
    const modal = await this.modalController.create({
        component: PgAddPhonePage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.reload){
        this.loadPhones();
    }
  }

  public filterPhone(evt: any) {
    const searchTerm = evt.srcElement.value;
    this.filterStr = searchTerm;

    if (!searchTerm) {
        this.displayPhones = this.arrPhones;
        return;
    }

    this.postFilterPhone(searchTerm);
  }

  private postFilterPhone(filter: string) {
    if (filter.trim() === ''){
        this.displayPhones = this.arrPhones;
        return
    }
    
    this.displayPhones = this.arrPhones.filter((obj) => {
      // search by phone nbr
      const phone = obj.ddd + obj.phone;
      const foundPhone = phone.indexOf(filter) >= 0;

      // search by contact name
      const arrContent = obj.content.filter((obj2) => {
        return obj2.name.toLowerCase().indexOf(filter.toLowerCase()) >=0;
      });
      const foundName = arrContent.length > 0;

      return foundPhone || foundName;
    });
  }

  public getLastContact(ddd: string, phone: string) {
    const objPhone = this.arrPhones.find(element => element.ddd === ddd && element.phone === phone);
    if (typeof objPhone !== 'undefined') {
        const lastContact = objPhone.content[0];
        if (typeof lastContact !== 'undefined') {
            const name    = lastContact.name;
            const strName = (name !== '') ? ' (' + name + ')' : '';

            return moment(lastContact.date).format('DD/MM/YYYY') + strName;
        }
    }

    return ' nenhum contato';
  }

  async doRefresh(event: any) {
    const ret = await this.loadPhones();

    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
