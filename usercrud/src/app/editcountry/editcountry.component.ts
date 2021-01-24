import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Country} from '../country';

@Component({
  selector: 'app-editcountry',
  templateUrl: './editcountry.component.html',
  styleUrls: ['./editcountry.component.css']
})
export class EditcountryComponent implements OnInit {
  country = new Country();

  constructor(private _service:NgserviceService, private _route:Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // When you get the "field" id from url as a parameter it will be in string format, you have to format it to "int" by parsing it.
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id')!);
    this._service.fetchCountryByIdFromRemote(id).subscribe(
      data=> {
        console.log("Data fetched successfully");
        this.country = data; // This line allows us to update the view in a smooth way

      },
      error => console.log("Exception on fetching product by id to edit")
    )
  }
  updateCountryFormSubmit()
  {
    this._service.addCountryToRemote(this.country).subscribe
    (
      data => {
        console.log("Country details added!");
        this._route.navigate(['countrylist'])
      },
      error => console.log("Error!")
    )
  }

  gotolist(){
    console.log('Going Back!');
    this._route.navigate(['productlist']);
  }
}
