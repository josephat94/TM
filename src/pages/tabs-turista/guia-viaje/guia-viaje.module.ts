import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuiaViajePage } from './guia-viaje';

@NgModule({
  declarations: [
    GuiaViajePage,
  ],
  imports: [
    IonicPageModule.forChild(GuiaViajePage),
  ],
})
export class GuiaViajePageModule {}
