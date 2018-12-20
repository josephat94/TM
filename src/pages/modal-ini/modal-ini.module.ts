import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalIniPage } from './modal-ini';

@NgModule({
  declarations: [
    ModalIniPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalIniPage),
  ],
})
export class ModalIniPageModule {}
