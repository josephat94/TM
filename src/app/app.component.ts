import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { TabsTuristaPage } from '../pages/tabs-turista/tabs-turista';
import { TabsPasajePage } from '../pages/tabs-pasaje/tabs-pasaje';
import { ModalIniPage } from '../pages/modal-ini/modal-ini';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ModalIniPage; //HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
goToLogin(){

  this.rootPage= LoginPage
}
 goToTurista(){

  this.rootPage=TabsTuristaPage;
 }

 goToPasaje(){
   this.rootPage= TabsPasajePage;
 }
}

