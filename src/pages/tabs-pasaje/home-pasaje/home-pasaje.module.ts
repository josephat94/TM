import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePasajePage } from './home-pasaje';

@NgModule({
  declarations: [
    HomePasajePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePasajePage),
  ],
})
export class HomePasajePageModule {}
