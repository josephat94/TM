import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePasajePage } from './home-pasaje/home-pasaje';
import { HorarosTarifasPage } from './horaros-tarifas/horaros-tarifas';
import { MiBoletoPage } from './mi-boleto/mi-boleto';

/**
 * Generated class for the TabsPasajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-pasaje',
  templateUrl: 'tabs-pasaje.html',
})
export class TabsPasajePage {
tab1=null;
tab2=null;
tab3=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl:MenuController) {
    this.tab1 = HomePasajePage;
    this.tab2= MiBoletoPage;
    this.tab3 = HorarosTarifasPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPasajePage');
  }
  menuToggle(){

    this.menuCtrl.open();
     }

}
