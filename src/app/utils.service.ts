import { Injectable } from '@angular/core';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(
    private loadingCtr: LoadingController,
    private alertCtr: AlertController,
    public platform: Platform,
  ) { }

  public getAppVersion() {
    return '1.1.0';
  }

  async getLoader(message: any, spinner: any) {
    return await this.loadingCtr.create({
      message,
      spinner,
    }).then((res) => {
      res.present();

      const TIME_IN_MS = 5000;
      const hideFooterTimeout = setTimeout( () => {
        this.closeLoader();
      }, TIME_IN_MS);
    });
  }

  async closeLoader() {
    try {
      return await this.loadingCtr.dismiss();
    } catch (err) {
      return;
    }
  }

  async showAlert(header: string, subHeader: string, message: string, buttons: any) {
    const alert = await this.alertCtr.create({
      header,
      subHeader,
      message,
      buttons,
    });
    return await alert.present();
  }

  isMobileBrowser() {
    // is this web-browser on mobile device
    return this.platform.is('mobileweb');
  }

}
