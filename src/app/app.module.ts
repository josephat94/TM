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
import { HomePasajePage } from '../pages/home-pasaje/home-pasaje';
import { HomeTuristaPage } from '../pages/home-turista/home-turista';
import { UserInfoProvider } from '../providers/user-info/user-info';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage, ModalLoginPage, ModalIniPage, LangPage, HomePasajePage, HomeTuristaPage
  ],
  imports: [
    BrowserModule,
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
    HomePage, LoginPage, ModalLoginPage, ModalIniPage, LangPage, HomePasajePage, HomeTuristaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserInfoProvider
  ]
})
export class AppModule {}
