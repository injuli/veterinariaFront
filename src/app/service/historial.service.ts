import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Historial } from '../models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  historialURL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Historial[]> {
    return this.httpClient.get<Historial[]>(this.historialURL + 'lista');
  }


  public detail(id: number): Observable<Historial> {
    console.log(this.httpClient.get<Historial>(this.historialURL + `detail/${id}`));
    return this.httpClient.get<Historial>(this.historialURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Historial> {
    return this.httpClient.get<Historial>(this.historialURL + `detailname/${nombre}`);
  }

  public save(historial: Historial): Observable<any>{
    return this.httpClient.post<any>(this.historialURL + 'create', historial);
  }

  public update(id: number, historial: Historial): Observable<any> {
    return this.httpClient.put<any>(this.historialURL + `update/${id}`, historial);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.historialURL + `delete/${id}`);
  }
}
