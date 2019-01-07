import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomeTuristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-turista',
  templateUrl: 'home-turista.html',
})
export class HomeTuristaPage {
Paqs=[{name:"Paquete todo en 1", url:'paq1.png'}, {name:"Paquete básico", url:'paq1.png'}, {name:"Paquete doble", url:'paq1.png'}]
Hotels=[{name:1},{name:1},{name:1}]
constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'Pasajero');
    this.menuCtrl.enable(true, 'Turista');
    console.log('ionViewDidLoad HomeTuristaPage');
  }

}
