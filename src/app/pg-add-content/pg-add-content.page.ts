import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;

import * as moment from 'moment';
import { UtilsService } from '../utils.service';
import { DatabaseService, ContactInfo } from './../database.service';

@Component({
    selector: 'app-pg-add-content',
    templateUrl: './pg-add-content.page.html',
    styleUrls: ['./pg-add-content.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class PgAddContentPage implements OnInit {
    @Input() type: string;
    @Input() ddd: string;
    @Input() phone: string;
    @Input() idx: string;

    strTitle = '';
    arrContactTypes = [];
    frmContent = {
        date: '',
        type: '',
        name: '',
        text: '',
        publication: '',
        notes : ''
    };
    contactInfo: ContactInfo;

    constructor(
        public modalController: ModalController,
        private utilsSrv: UtilsService,
        private db: DatabaseService,
        private zone: NgZone,
    ) {
        this.arrContactTypes = db.getContactTypes();
    }

    async ngOnInit() {
        this.frmContent.date = moment().format('YYYY-MM-DD');
        this.strTitle        = (this.type === 'edit') ? 'Editar' : 'Adicionar';

        const retContact     = await this.db.getContact(this.ddd, this.phone, this.idx);
        if (retContact !== false) {
            this.frmContent.date        = retContact.date;
            this.frmContent.type        = retContact.type;
            this.frmContent.name        = retContact.name;
            this.frmContent.text        = retContact.text;
            this.frmContent.publication = retContact.publication;
            this.frmContent.notes       = retContact.anotations;
        }
    }

    close() {
        this.modalController.dismiss({
            reload: false
        });
    }

    clearInput(element: any){
        this.frmContent[element] = '';
    }

    private validateData() {
        const ret = {
            error: false,
            msg: ''
        };

        if ( this.frmContent.date === '' ){
            ret.error = true;
            ret.msg   = 'Informe a data';
        } else if ( this.frmContent.type === '' ) {
            ret.error = true;
            ret.msg   = 'Selecione o tipo';
        } else if ( this.frmContent.notes.trim().length < 2 ) {
            ret.error = true;
            ret.msg   = 'Insira uma anotação';
        }

        return ret;
    }

    async save() {
        Keyboard.hide();

        const retValidate = this.validateData();
        if (retValidate.error){
            this.utilsSrv.showAlert('Alerta', '', retValidate.msg, ['OK']);
        } else {
            this.contactInfo = {
                ddd: this.ddd,
                phone: this.phone,
                date: this.frmContent.date,
                type: this.frmContent.type,
                name: this.frmContent.name,
                text: this.frmContent.text,
                publication: this.frmContent.publication,
                anotations: this.frmContent.notes,
            };

            if (this.type === 'edit') {
                const ret = await this.db.editContact(this.contactInfo, this.idx);
            } else {
                const ret = await this.db.addContact(this.contactInfo);
            }

            setTimeout(() => {
                this.modalController.dismiss({
                    reload: true,
                });
            }, 400);
        }
    }

    async delete() {
        this.utilsSrv.showAlert('Confirmação!', '', 'Deseja realmente deletar esse registro? Essa ação não poderá ser desfeita.', [
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
        const ret = await this.db.deleteContact(this.ddd, this.phone, this.idx);
        if (ret){
            this.modalController.dismiss({
                reload: true,
            });
        }
    }
}
