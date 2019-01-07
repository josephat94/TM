import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { LangPage } from '../lang/lang';
import { HomePage } from '../home/home';


import { UserInfoProvider } from '../../providers/user-info/user-info';
import { TabsTuristaPage } from '../tabs-turista/tabs-turista';
import { TabsPasajePage } from '../tabs-pasaje/tabs-pasaje';
import { LoginPage } from '../login/login';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public menuCtrl: MenuController, private __user: UserInfoProvider) {
 
  }

ionViewDidLoad() {
  this.menuCtrl.enable(true, 'Pasajero');
  this.menuCtrl.enable(false, 'Turista');
const modal = this.modalCtrl.create(LangPage);
  this.__user.getUser().then((user:any)=>{
    
    
    
    console.log(user.lang);this.Lang= user.lang;

    modal.onDidDismiss((data)=>{
      this.__user.getUser().then((user:any)=>{console.log(user); this.Lang= user.lang}).catch((e)=>{console.log(e)})
      
      })

  }).catch((e)=>{

    if( this.Lang){
      console.log("Ther are information")
          }else{
            modal.present();
          }

  })



  }


  goToHome(){
    this.navCtrl.setRoot(TabsTuristaPage);
  }
goToHomePasaje(){
  this.navCtrl.setRoot(LoginPage)
}
goToHomeTurista(){

  this.navCtrl.setRoot(LoginPage);
}
}
