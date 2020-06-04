import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export interface ContactInfo {
    ddd: string;
    phone: string;
    date: string;
    type: string;
    name: string;
    text: string;
    publication: string;
    anotations: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  keyPhones = 'phones';
  allPhones: [] = null;

  constructor() { }

  public async getAllPhones() {
    let arrPhone: [];

    if (this.allPhones){
        arrPhone = this.allPhones;
    } else {
        const retPhones = await Storage.get({ key: this.keyPhones });
        const dbPhone   = (typeof retPhones.value !== 'undefined' && retPhones.value !== null) ? retPhones.value : '[]';
        arrPhone  = JSON.parse(dbPhone);
        this.allPhones  = arrPhone;
    }

    arrPhone.sort((a: any, b: any) => {
        const keyA = a.ddd + a.phone;
        const keyB = b.ddd + b.phone;

        if (keyA < keyB){
            return -1;
        } else {
            return 1;
        }
    });

    return arrPhone;
  }

  private async savePhones(allPhones: []) {
    Storage.set({
        key: this.keyPhones,
        value: JSON.stringify(allPhones)
    });
  }

  public async addPhone(ddd: string, phone: string) {
    const allPhones: any = await this.getAllPhones();
    const checkPhone     = await this.getPhone(ddd, phone);

    if (checkPhone == null){
        allPhones.push({
            ddd,
            phone,
            content : []
        });

        this.savePhones(allPhones);

        return true;
    } else {
        return false;
    }
  }

  public async getPhone(ddd: string, phone: string) {
    let retPhone         = null;
    const arrPhones: any = await this.getAllPhones();

    for (const loopPhone of arrPhones) {
        const loopDDD    = loopPhone.ddd;
        const loopNumber = loopPhone.phone;

        if ( loopDDD === ddd && loopNumber === phone ){
            retPhone = loopPhone;
            break;
        }
    }

    return retPhone;
  }

  public async deletePhone(ddd: string, phone: string) {
    const allPhones: any = await this.getAllPhones();
    let deleted          = false;

    for (let i = 0; i < allPhones.length; i++) {
        if (allPhones[i].ddd === ddd && allPhones[i].phone === phone) {
            allPhones.splice(i, 1);
            deleted = true;
            break;
        }
    }

    if (deleted) {
        this.savePhones(allPhones);
    }

    return deleted;
  }

  public getContactTypes() {
      const arrTypes = [];

      arrTypes.push('Fora de área');
      arrTypes.push('Caixa postal');
      arrTypes.push('Atendeu');
      arrTypes.push('Revisita');
      arrTypes.push('Não Atendeu');
      arrTypes.push('Não quer retorno');

      return arrTypes;
  }

  private async saveContact(contactInfo: ContactInfo, idx: string = '') {
    const isEdit  = idx !== '';
    const dateErr = contactInfo.date === '';
    const typeErr = contactInfo.type === '';

    if (!dateErr && !typeErr) {
        const allPhones: any = await this.getAllPhones();
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < allPhones.length; i++) {
            const dddLoop   = allPhones[i].ddd;
            const phoneLoop = allPhones[i].phone;

            if (dddLoop === contactInfo.ddd && phoneLoop === contactInfo.phone) {
                const newInfo = {
                    date: contactInfo.date,
                    type: contactInfo.type,
                    name: contactInfo.name,
                    text: contactInfo.text,
                    publication: contactInfo.publication,
                    anotations: contactInfo.anotations,
                };

                if ( isEdit ) {
                    allPhones[i].content[idx] = newInfo;
                } else {
                    allPhones[i].content.push(newInfo);
                }

                allPhones[i].content.sort((a: any, b: any) => {
                    const keyA = a.date;
                    const keyB = b.date;

                    if (keyA > keyB){
                        return -1;
                    } else {
                        return 1;
                    }
                });

                this.savePhones(allPhones);
                return true;
            }
        }
    }

    return false;
  }

  public async addContact(contactInfo: ContactInfo) {
    this.saveContact(contactInfo);
  }

  public async editContact(contactInfo: ContactInfo, idx: string) {
    this.saveContact(contactInfo, idx);
  }

  public async getContact(ddd: string, phone: string, idx: string) {
    const obPhone = await this.getPhone(ddd, phone);
    if (obPhone !== false) {
        const contact = obPhone.content[idx];
        if (typeof contact !== 'undefined') {
            return contact;
        }
    }

    return false;
  }

  public async getLastContactInfo(ddd: string, phone: string) {
    const obPhone = await this.getPhone(ddd, phone);
    if (obPhone !== false) {
        const lastContact = obPhone.content[0];
        if (typeof lastContact !== 'undefined') {
            return lastContact;
        }
    }

    return false;
  }

  public async deleteContact(ddd: string, phone: string, idx: string) {
    const allPhones: any = await this.getAllPhones();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < allPhones.length; i++) {
        const dddLoop   = allPhones[i].ddd;
        const phoneLoop = allPhones[i].phone;

        if (dddLoop === ddd && phoneLoop === phone) {
            allPhones[i].content.splice(idx, 1);
            this.savePhones(allPhones);
            return true;
        }
    }

    return false;
  }
}
