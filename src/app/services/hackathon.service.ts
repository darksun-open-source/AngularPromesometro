import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Partido } from '../models/party';
import { Promesa } from '../models/promise';
import { Candidato } from '../models/candidate';

@Injectable()
export class HackathonService {
  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addParties(partie: Partido): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(partie);

    return this._http.post(this.url + "agregar-partido", params, {headers: headers});
  }

  addPromise(promise: Promesa): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(promise);

    return this._http.post(this.url + "agregar-promesa", params, {headers: headers});
  }

  addCandidate(candidate: Candidato): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(candidate);
    
    return this._http.put(this.url + "agregar-candidatos", params, {headers: headers});
  }

  listarPartidos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get("https://2nq4yok6i3.execute-api.us-east-1.amazonaws.com/dev/obtener-partidos", { headers: headers });
  }

  getPromisesByCategory(category): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + "obtener-promesas-por-categoria/" + category, {headers: headers});
  }
  
}
