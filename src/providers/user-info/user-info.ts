import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import User from '../../classes/user';
/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserInfoProvider {
User: User;
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello UserInfoProvider Provider');
  }

setUser(user:User){

  this.storage.set('user-data', user);
  

  this.storage.get('user-data').then((user)=>{
    this.User= user;

    
  })
}


getUser(){
  return this.User;
}

}
