import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the LangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html',
})
export class LangPage {
Langs= [{name: "English", id:"Eng"},{name: "Spanish", id:"Esp"},{name: "Chinese", id:"Chin"},{name: "German", id:"Ger"},{name: "French", id:"Fre"}, {name: "Portuguese", id:"Port"}, {name: "Japanese", id:"Jap"}]
LangSelected=null;
constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LangPage');
  }

  selectLanguage(index){

      this.LangSelected= this.Langs[index];
  }
  closeModal(){


    if(this.LangSelected.id != "Eng" && this.LangSelected.id !="Esp"){

      const alert = this.alertCtrl.create({
        title: 'Hi!',
        message: 'We are really so sorry, but right now we only have spanish or english as language, it is corrert if we put english as your language? ',
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: data => {
              this.LangSelected= this.Langs[0];
              console.log('Saved clicked');
              this.viewCtrl.dismiss({lang:this.LangSelected});
            }
          }
        ]
      });
      alert.present();
    }else{
      this.viewCtrl.dismiss({lang:this.LangSelected});
    }
   
  }
}
