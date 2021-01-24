import { Component, OnInit, ViewChild } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Country } from '../country';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcountryComponent } from '../addcountry/addcountry.component';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'desc', 'area', 'actions'];
  @ViewChild(MatSort) sort : MatSort;
  searchKey:string;
  listData: MatTableDataSource<any>;

  _countrylist : Array<Country> =   [];
  constructor(private _service:NgserviceService, private _route:Router, private dialog: MatDialog,private _notify:NotificationsService) { }

  ngOnInit() {
    /*this._service.fetchCountryListFromRemote().subscribe(
      data => console.log("Response Recieved"),
      error => console.log("Exception Occured")  
    )*/
    this.getCountries();
  }
  getCountries() {
    this._service.fetchCountryListFromRemote().subscribe(
      data => this._countrylist = data,
      error => console.log("Exception occurred 1"),
    )
    this.listData = new MatTableDataSource<Country>(this._countrylist);
    this.listData.sort = this.sort;
  }
  isEmpty()
  {
    if (this._countrylist == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddProduct() {
    this._route.navigate(['/addcountry']);
  }

  goToUpdateCountry(id: number) {
    console.log("id: "+ id);
    this._route.navigate(['/editcountry', id]);
  }
 

  goToViewCountry(id: number){
    this._route.navigate(['/viewcountry', id]);

  }

  /* I uses delete request, but you can use post as well, it will work, the problem I have is the delete post has no return body,
   so I can use success or error message with it, what ever I do it end up in the exception, for the time being,
   to refresh the product list I added it with the exception until I resolve it */

  deleteCountry(id: number) {
    if (confirm('Are you sure ?'))
      this._service.deleteCountryByIdFromRemote(id).subscribe(
      data =>{ 
        console.debug("Deleted Successfully!");
        this._route.navigate(['/countrylist']);
    },
    error=> {console.log("Exception occured 2");
    this.getCountries()
  }
   )
  }

  onCreate(){
    this.dialog.open(AddcountryComponent);
  }

  onDelete(id: any){
    if(confirm('Are you sure to delete this record?')){
      this.deleteCountry(id);
      this._notify.warn("Deleted Succesfully!");
    }
    
  }
}
