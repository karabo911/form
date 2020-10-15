import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

student : any;
name : any;

  constructor(public _data : DatabaseService,public _route : ActivatedRoute) { }
  AddUsers(UserData : NgForm){
   
    // add this to our database
    this._data.Addusers(UserData.value);
  }

  //delete users

  deleteUser(ref){
    this._data.deletestudent(ref);
  }

  

  ngOnInit() {

    this._data.GetUsers().snapshotChanges().subscribe( action =>{
      console.log(action);
      this.student = action;
    })

   
  }

}
