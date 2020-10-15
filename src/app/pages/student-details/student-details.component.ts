import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student : any;
  Ref : any;

  constructor(public _data: DatabaseService, public _route: ActivatedRoute) { }

  //delete user
  deleteUser(ref){
    this._data.deletestudent(ref);
  }

  //update user
  updateUser(ref){
    this._data.updateUser(ref);
  }

  ngOnInit() {

    //get reference

    this.Ref = this._route.snapshot.paramMap.get('ref');
    console.log ( 'Ref:',this.Ref);

    this._data.GetUsers().snapshotChanges().subscribe(action =>{
      console.log(action);
      this.student = action;
    });
   

   


  }

}
