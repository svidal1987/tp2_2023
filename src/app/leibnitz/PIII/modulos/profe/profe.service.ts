import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfeService {

  url = environment.URL_PLANET
  constructor(private http : HttpClient) { }

  getPlanets(page:number) :Observable<any>{
    return this.http.get(this.url+'?format=json&page='+page);
  }
  getPlanetById(id:number) :Observable<any>{
    return this.http.get(this.url+'/'+id);
  }
}
