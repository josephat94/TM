import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTuristaPage } from './home-turista';

@NgModule({
  declarations: [
    HomeTuristaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTuristaPage),
  ],
})
export class HomeTuristaPageModule {}
