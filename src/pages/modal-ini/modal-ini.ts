import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LangPage } from '../lang/lang';
import { HomePage } from '../home/home';

/**
 * Generated class for the ModalIniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-ini',
  templateUrl: 'modal-ini.html',
})
export class ModalIniPage {
Lang=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
 
  }

  ionViewDidLoad() {
const modal = this.modalCtrl.create(LangPage);
modal.present();
modal.onDidDismiss((data)=>{
console.log(data);
this.Lang= data.lang;
})
  }


  goToHome(){
this.navCtrl.setRoot(HomePage)

  }

}
