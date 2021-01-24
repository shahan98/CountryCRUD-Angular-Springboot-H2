import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  country = new Country();
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activatedRouter.snapshot.paramMap.get('id')!);
    this._service.fetchCountryByIdFromRemote(id).subscribe(
    data=>{
      console.log("data received");
      this.country = data;
    },
      error => console.log("Exception Occured")
    )
  }
  gotolist() {
    this._route.navigate(['productlist']);
  }
  

}
