import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ModalIniPage } from '../modal-ini/modal-ini';
import { HomeTuristaPage } from './home-turista/home-turista';
import { RutasPage } from '../rutas/rutas';
import { DestinosPage } from './destinos/destinos';
import { GuiaViajePage } from './guia-viaje/guia-viaje';


/**
 * Generated class for the TabsTuristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-turista',
  templateUrl: 'tabs-turista.html',
})
export class TabsTuristaPage {
tab1=null;
tab2=null;
tab3=null;
tab4=null; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.tab1 = HomeTuristaPage;
    this.tab2 = RutasPage;
    this.tab3= DestinosPage;
    this.tab4= GuiaViajePage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsTuristaPage');
  }



  menuToggle(){

 this.menuCtrl.open();
  }
}
