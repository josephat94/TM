import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MiBoletoPage } from '../mi-boleto/mi-boleto';

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
redondo:boolean= false;
DatosUser= false;
DatosViaje=true;
DatosCompra=false;
AcceptedData=false;
escalas:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  this.DatosUser=false;
  this.DatosCompra=false;
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'Pasajero');
    this.menuCtrl.enable(false, 'Turista');
    console.log('ionViewDidLoad HomePasajePage');
  }
  fillUserData(){
this.DatosViaje=false;
    this.DatosUser=true;
  }

  fillCompra(){
    this.DatosUser=false;
    this.DatosViaje=false;
    this.DatosCompra=true;
  }

  AcceptData(){
    this.AcceptedData=true;
  }
back(opc){
  switch(opc){
    case 1: 
    
    this.DatosViaje=false;
    this.DatosCompra=false;
    this.DatosUser=true;
    break;

    case 2:
    this.DatosUser=false;
    this.DatosCompra=false;
    this.DatosViaje=true;
   
    break;
  }
}

goToBoleto(){

  this.navCtrl.setRoot(MiBoletoPage);
}
}
