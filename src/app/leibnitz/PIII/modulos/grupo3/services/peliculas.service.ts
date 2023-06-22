import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  getPeliculas(): Observable<any> {
    return this.http.get('https://api-gateway-eosin.vercel.app/peliculas');
  }
  getPelicula(id:string):Observable<any>{
    return this.http.get('https://api-gateway-eosin.vercel.app/peliculas/' + id)
  }
  getPeliculaporTitulo(titulo: string): Observable<any[]> {
    return this.http.get<any[]>('https://api-gateway-eosin.vercel.app/peliculas/titulo/' + titulo);
  }
  
  createPelicula(pelicula: any){
    return this.http.post('https://api-gateway-eosin.vercel.app/peliculas', pelicula);
  }

  updatePelicula(id: string, pelicula:any):Observable<void>{
    return this.http.put<void>('https://api-gateway-eosin.vercel.app/peliculas/' + id, pelicula)
  }
  
  deletePelicula(id: number): Observable<void>{
    return this.http.delete<void>('https://api-gateway-eosin.vercel.app/peliculas/'+ id)
  }
  
  getDirectores(): Observable<any> {
    return this.http.get('https://api-peliculas-vercel.vercel.app/api/director');
  }

  getActores(): Observable<any> {
    return this.http.get('https://api-peliculas-vercel.vercel.app/api/actor');
  }

  getGenero(): Observable<any> {
    return this.http.get('https://api-peliculas-vercel.vercel.app/api/genero');
  }
}
