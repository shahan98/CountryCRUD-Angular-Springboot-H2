import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { EditcountryComponent } from './editcountry/editcountry.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  {path:'',component:CountrylistComponent},
  {path: 'countrylist', component:CountrylistComponent},
  {path: 'addcountry', component:AddcountryComponent},
  {path: 'editcountry/:id', component:EditcountryComponent},
  {path: 'editcountry', component:EditcountryComponent},
  {path: 'viewcountry/:id', component:ViewproductComponent},
  {path: 'viewcountry', component:ViewproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
