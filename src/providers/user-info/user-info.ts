import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import User from '../../classes/user';
import { resolveDefinition } from '@angular/core/src/view/util';
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

  this.storage.set('user_data', user);
  

  this.storage.get('user_data').then((user)=>{
    this.User= user;

    
  })
}


getUser(){

  let prom = new Promise((resolve, reject)=>{

    this.storage.get('user_data').then((user)=>{
this.User= user;
resolve(user);
    }).catch((e)=>{
  reject(e);
    })
  })



  return prom;
}

}
