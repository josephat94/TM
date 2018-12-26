import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ModalLoginPage } from '../modal-login/modal-login';
import {Lang_esp} from '../../util/Esp.js'
import {Lang_eng} from '../../util/Eng'
import { HomePasajePage } from '../home-pasaje/home-pasaje';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
Lang= true?Lang_esp.Login:Lang_eng.Login  ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    console.log(Lang_esp);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  gotoHome(){
    this.navCtrl.setRoot(HomePasajePage);
  }

  createAccount(){

  let modal=  this.modalCtrl.create(ModalLoginPage);
  modal.present();
  }

}
