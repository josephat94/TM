import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import { ModalIniPage } from '../pages/modal-ini/modal-ini';
import { LangPage } from '../pages/lang/lang';


import { UserInfoProvider } from '../providers/user-info/user-info';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { TabsTuristaPage } from '../pages/tabs-turista/tabs-turista';
import { HomeTuristaPage } from '../pages/tabs-turista/home-turista/home-turista';
import { RutasPage } from '../pages/rutas/rutas';
import { DestinosPage } from '../pages/tabs-turista/destinos/destinos';
import { GuiaViajePage } from '../pages/tabs-turista/guia-viaje/guia-viaje';
import { HomePasajePage } from '../pages/tabs-pasaje/home-pasaje/home-pasaje';
import { TabsPasajePage } from '../pages/tabs-pasaje/tabs-pasaje';
import { MiBoletoPage } from '../pages/tabs-pasaje/mi-boleto/mi-boleto';
import { HorarosTarifasPage } from '../pages/tabs-pasaje/horaros-tarifas/horaros-tarifas';

@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage, ModalLoginPage, ModalIniPage, LangPage, HomePasajePage,TabsPasajePage,MiBoletoPage,HorarosTarifasPage,
     HomeTuristaPage, TabsTuristaPage, RutasPage, DestinosPage, GuiaViajePage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp,{
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      menuType: 'push',
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage, ModalLoginPage, ModalIniPage, LangPage, HomePasajePage,TabsPasajePage,MiBoletoPage,HorarosTarifasPage,
    HomeTuristaPage, TabsTuristaPage, RutasPage, DestinosPage, GuiaViajePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserInfoProvider
  ]
})
export class AppModule {}
