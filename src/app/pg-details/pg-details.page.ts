import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

import { DatabaseService } from './../database.service';
import { UtilsService } from './../utils.service';
import { PgAddContentPage } from '../pg-add-content/pg-add-content.page';

@Component({
  selector: 'app-pg-details',
    templateUrl: './pg-details.page.html',
    styleUrls: ['./pg-details.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PgDetailsPage implements OnInit {
    ddd: string;
    phone: string;
    content: [];
    noContent: any;

    constructor(
        private actRoute: ActivatedRoute,
        private db: DatabaseService,
        private utilsSrv: UtilsService,
        private navCtrl: NavController,
        public modalController: ModalController,
        private zone: NgZone,
        private callNumber: CallNumber,
    ) { }

    ngOnInit() {
    }

    async ionViewWillEnter() {
        await this.actRoute.params.subscribe((res) => {
            this.ddd = res.ddd;
            this.phone = res.phone;
        });

        this.loadData();
    }

    private loadData() {
        this.zone.run(() => {
            setTimeout(() => {
                this.db.getPhone(this.ddd, this.phone).then((Phone) => {
                    this.content   = Phone.content;
                    this.noContent = (this.content.length === 0);
                });
            }, 650);

            /*const Phone    = await this.db.getPhone(this.ddd, this.phone);
            this.content   = Phone.content;
            this.noContent = (this.content.length === 0);*/
        });
    }

    async edit(idx: any) {
        const modal = await this.modalController.create({
            component: PgAddContentPage,
            componentProps: {
                type: 'edit',
                ddd: this.ddd,
                phone: this.phone,
                idx
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();
        if (data.reload) {
            this.loadData();
        }
    }

    delete() {
        this.utilsSrv.showAlert('Confirmação!', '', 'Deseja realmente deletar esse telefone? Essa ação não poderá ser desfeita.', [
            {
                text: 'Não ...',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => { }
            }, {
                text: 'Sim!',
                handler: () => {
                    this.postDelete();
                }
            }
        ]);
    }

    private async postDelete() {
        const ret = await this.db.deletePhone(this.ddd, this.phone);
        if (ret){
            this.navCtrl.navigateBack('');
        }
    }

    async addContent() {
        const modal = await this.modalController.create({
            component: PgAddContentPage,
            componentProps: {
                type: 'insert',
                ddd: this.ddd,
                phone: this.phone
            }
        });
        await modal.present();
        const { data } = await modal.onWillDismiss();
        this.loadData();
    }

    async doRefresh(event: any) {
        this.loadData();

        setTimeout(() => {
          event.target.complete();
        }, 1500);
    }

    makeCall() {
        this.callNumber.callNumber(this.ddd + this.phone, true)
            .catch(err => this.utilsSrv.showAlert('Alerta', '', 'Não foi permitido fazer a ligação. Mensagem: ' + err, ['OK']));
    }

    /*async openWhats(){
        await Browser.open({
            url: 'whatsapp://send?phone=' + this.ddd + this.phone
        });
    }*/
}
