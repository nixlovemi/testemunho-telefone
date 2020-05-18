import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-pg-add-phone',
  templateUrl: './pg-add-phone.page.html',
  styleUrls: ['./pg-add-phone.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PgAddPhonePage implements OnInit {
    segmentValue = 'single';
    ddd: any;
    singlePhone: any;
    multiplePhone: any;
    multipleLastStart: any;
    multipleLastEnd: any;

    constructor(
        public modalController: ModalController,
        private utilsSrv: UtilsService
    ) { }

    ngOnInit() {
    }

    close() {
        this.modalController.dismiss({
            reload: false
        });
    }

    private validateData() {
        const ret = {
            error: false,
            msg: ''
        };

        const vDDD               = (typeof this.ddd === 'undefined') ? 0 : parseInt(this.ddd, 10);
        const vSinglePhone       = (typeof this.singlePhone !== 'undefined') ? this.singlePhone : '';
        const vMultiplePhone     = (typeof this.multiplePhone !== 'undefined') ? this.multiplePhone : '';
        const vMultipleLastStart = (typeof this.multipleLastStart !== 'undefined') ? this.multipleLastStart : '';
        const vMultipleLastEnd   = (typeof this.multipleLastEnd !== 'undefined') ? this.multipleLastEnd : '';

        if ( vDDD <= 0 || vDDD > 99 ){
            ret.error = true;
            ret.msg   = 'Informe o DDD entre 01 e 99';
        } else {
            if (this.segmentValue === 'single'){
                if (vSinglePhone.length !== 9 && vSinglePhone.length !== 8){
                    ret.error = true;
                    ret.msg   = 'Informe o telefone com 8 ou 9 dígitos';
                }
            } else {
                if (vMultiplePhone.length !== 5 && vMultiplePhone.length !== 4){
                    ret.error = true;
                    ret.msg   = 'Informe o início do telefone com 4 ou 5 dígitos';
                } else if (vMultipleLastStart.length !== 4 || vMultipleLastEnd.length !== 4) {
                    ret.error = true;
                    ret.msg   = 'Informe os últimos dígitos do telefone com 4 dígitos';
                } else {
                    const minPhone = parseInt(this.multipleLastStart, 10);
                    const maxPhone = parseInt(this.multipleLastEnd, 10);

                    if (minPhone >= maxPhone){
                        ret.error = true;
                        ret.msg   = 'Informe o último número (de:) menor que o último número (para:)';
                    }
                }
            }
        }

        return ret;
    }

    save() {
        const retValidate = this.validateData();
        if (retValidate.error){
            this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
        } else {
            const arrPhones = [];
            const phoneItem = {
                ddd : '',
                phone : ''
            };
            phoneItem.ddd = (this.ddd.length === 1) ? '0' + this.ddd : this.ddd;

            if (this.segmentValue === 'single'){
                phoneItem.phone = this.singlePhone;
                arrPhones.push(phoneItem);
            } else {
                
            }

            console.log(arrPhones);

            this.modalController.dismiss({
                reload: true,
                newId: 0
            });
        }
    }

    segmentChanged(event: any) {
        // console.log(event);
    }
}
