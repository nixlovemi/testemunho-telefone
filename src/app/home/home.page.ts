import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrPhones = [];
  
  constructor(
    private navCtrl: NavController,
  ) {
    for(let i=0; i< 10; i++){
      this.arrPhones.push('');
    }
  }

  openDetails() {
    this.navCtrl.navigateForward('/pg-details');
  }
}
