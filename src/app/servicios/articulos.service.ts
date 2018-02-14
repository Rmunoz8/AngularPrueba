import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticuloComponent } from '../articulo/articulo.component';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticulosService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {

  }

  public getArticulos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  // public getArticuloById(id: string): Observable<Articulo> {
  //   return this.http.get<Articulo>(this.url + id);
  // }
  // public saveArticulo(Articulo: Articulo): Observable<any> {
  //   return this.http.post(this.url, Articulo);
  // }
  // public deleteArticulo$(Articulo: Articulo): Observable<any> {
  //   return this.http.delete(this.url + Articulo._id);
  // }

}
