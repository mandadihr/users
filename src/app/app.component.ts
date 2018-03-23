import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { CommonService } from './common.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private newService: CommonService) { }
  Repdata = [];
  valbutton = 'Save';


  ngOnInit() {
    this.user = { id: '', firstName: '', lastName: '', age: null, email: '' };
    this.newService.GetUser().subscribe(data => this.Repdata = data);
    console.log(this.Repdata);
  }

  onSave = function (user, isValid: boolean) {
    user.mode = this.valbutton;
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();

      }
        , error => this.errorMessage = error);
        //this.valbutton = 'Save';
  };

  edit = function (kk) {
    this.user.id = kk._id;
    this.user.firstName = kk.firstName;
    this.user.lastName = kk.lastName;
    this.user.age = kk.age;
    this.user.email = kk.email;
    this.valbutton = 'Update';
  };

  delete = function (id) {
    this.newService.deleteUser(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error);
  };


}


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}
