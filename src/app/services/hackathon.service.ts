import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';

@Injectable()
export class HackathonService {
  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  listarPartidos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'listarpromesas', { headers: headers });
  }

  
}
