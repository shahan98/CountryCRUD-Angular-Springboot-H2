import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Country} from '../country';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { NotificationsService } from '../notifications.service';
import { NgForm } from  '@angular/forms';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {
  country = new Country();

  constructor(public _service:NgserviceService, private _route:Router, private _notify:NotificationsService) { }

  form: FormGroup = new FormGroup({
    id : new FormControl('',[Validators.required, Validators.required]),
    name: new FormControl('',Validators.required),
    desc: new FormControl('',Validators.maxLength(30)),
    area: new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  }); 

  ngOnInit(): void {
  }

  addCountryFormSubmit()
  {
    this._service.addCountryToRemote(this.country).subscribe
    (
      data => {
        console.log("Country details added!");
        this._route.navigate(['countrylist'])
      },
      error => console.log("Error!")
    )
    this.onClear();
  }

  gotolist(){
    console.log('Going Back!');
    this._route.navigate(['countrylist']);
  }

  onClear(){
    this.form.reset();
    this.initializedFormGroup();
    this._notify.success("Submitted Successfully");
  }

  initializedFormGroup(){
    this.form.setValue({
      id: '',
      name: '',
      desc: '',
      area:''
    });  
  }

  /*onSubmit(){
    if(this.form.valid){
      this._service.addCountryToRemote(this.form.value);
      this.form.reset();
      this.initializedFormGroup();
    }
  }*/
}
