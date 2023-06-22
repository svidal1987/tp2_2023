import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-grupo3',
  templateUrl: './grupo3.component.html',
  styleUrls: ['./grupo3.component.css']
})
export class Grupo3Component implements OnInit {
  Peliculas: any;

  constructor(private servicio: PeliculasService) { }

  ngOnInit(): void {
    this.getPeliculas();
  }
  
  getPeliculas() {
    this.servicio.getPeliculas().subscribe(data => {
      this.Peliculas = data.data;
    })
  }
  deletePelicula(id: number) {
    this.servicio.deletePelicula(id).subscribe(() => {
      this.getPeliculas();
    })
  }

}
