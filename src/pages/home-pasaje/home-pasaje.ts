import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePasajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-pasaje',
  templateUrl: 'home-pasaje.html',
})
export class HomePasajePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'Pasajero');
    this.menuCtrl.enable(false, 'Turista');
    console.log('ionViewDidLoad HomePasajePage');
  }

}
