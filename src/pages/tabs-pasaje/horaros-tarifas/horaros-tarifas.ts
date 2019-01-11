import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HorarosTarifasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horaros-tarifas',
  templateUrl: 'horaros-tarifas.html',
})
export class HorarosTarifasPage {

search=false;
salida=null;
buscarsalida=null;
searching=false;
horarios=[{salida:'10:00 hrs', llegada:'12:00 hrs', precioP:'$100.00',precioT: '$200.00'},{salida:'12:00 hrs', llegada:'14:00 hrs', precioP:'$200.00',precioT: '$300.00'},{salida:'14:00 hrs', llegada:'16:00 hrs',precioP:'$200.00', precioT: '300.00'}]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorarosTarifasPage');
  }

buscarH(){
  this.searching=true;

  setTimeout(()=>{

    this.searching=false;
    console.log(this.search);

    this.salida= this.buscarsalida;
    this.search=true;
  }, 1500);

}

}
