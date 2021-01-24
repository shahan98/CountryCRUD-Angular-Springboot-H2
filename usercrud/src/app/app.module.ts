import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { EditcountryComponent } from './editcountry/editcountry.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgserviceService } from './ngservice.service';
import { ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    AddcountryComponent,
    CountrylistComponent,
    EditcountryComponent,
    ViewproductComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
    
  ],
  exports:[
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatInput,
    MatDialogModule
    
  ],
  providers: [NgserviceService],
  bootstrap: [AppComponent],
  entryComponents: [AddcountryComponent]
})
export class AppModule { }
