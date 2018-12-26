import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { LangPage } from '../lang/lang';
import { HomePage } from '../home/home';
import { HomePasajePage } from '../home-pasaje/home-pasaje';
import { HomeTuristaPage } from '../home-turista/home-turista';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public menuCtrl: MenuController) {
 
  }

ionViewDidLoad() {
    this.menuCtrl.enable(true, 'Pasajero');
    this.menuCtrl.enable(false, 'Turista');
const modal = this.modalCtrl.create(LangPage);
modal.present();
modal.onDidDismiss((data)=>{
console.log(data);
this.Lang= data.lang;
})
  }


  goToHome(){
    this.navCtrl.setRoot(HomeTuristaPage);
  }
goToHomePasaje(){
  this.navCtrl.setRoot(HomePasajePage)
}
goToHomeTurista(){

  this.navCtrl.setRoot(HomeTuristaPage);
}
}
