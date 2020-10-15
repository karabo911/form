import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public _fire: AngularFirestore ) { }

  //add users function

  Addusers(data){
   return this._fire.collection('Users').add(data).then( results =>{
     console.log('successfully added user')
   }).catch ( err => {
     console.log('Err occured:' , err)
   });
  }

  GetUsers(){

    return this._fire.collection('Users');
  }

  //delete function 

  deletestudent(ref){
    return this._fire.collection('Users').doc(ref).delete().then( results => {
      console.log('successfully deleted')
    }).catch( err =>{
      console.log('error occured, ', err)
    })
  }

  //update user

  updateUser(ref){

    this._fire.collection('Users').doc(ref).update(ref).then( results => {
      console.log('successfully updated')

    }).catch( err=>{
      console.log('error occured, ', err)
    })
  }
}
