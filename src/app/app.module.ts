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

@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage, ModalLoginPage, ModalIniPage, LangPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage, ModalLoginPage, ModalIniPage, LangPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
