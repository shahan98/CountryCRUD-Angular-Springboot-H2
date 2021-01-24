import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

class Country {
}
@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchCountryListFromRemote():Observable<any>{
    return this._http.get<any>("http://127.0.0.1:8080/rest/v2/getcountrylist");
  }
  addCountryToRemote(country: Country): Observable<any>{
    return this._http.post<any>('http://127.0.0.1:8080/rest/v2/addcountry',country);
  }
  updateCountryToRemote(country: Country): Observable<any>{
    return this._http.post<any>('http://127.0.0.1:8080/rest/v2/addcountry',country);
  }

  fetchCountryByIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://127.0.0.1:8080/rest/v2/getcountrybyid/'+id);
  }
  deleteCountryByIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://127.0.0.1:8080/rest/v2/deletecountrybyid/' + id);
  }
  
}
