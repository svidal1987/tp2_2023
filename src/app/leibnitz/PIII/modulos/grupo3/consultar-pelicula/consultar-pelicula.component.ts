import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-consultar-pelicula',
  templateUrl: './consultar-pelicula.component.html',
  styleUrls: ['./consultar-pelicula.component.css']
})
export class ConsultarPeliculaComponent implements OnInit {
  form: FormGroup;
  Directores: any[] = [];
  Actores: any[] = [];
  Generos: any[] = [];
  titulo: string | null;

  constructor(private servicio: PeliculasService,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        titulo: [''],
        aniolanzamiento: [null],
        idDirector: [null],
        idActor: [null],
        idGenero: [null],
        sinopsis: '',
        duracion: '',
        imagen: ''
      });
    this.titulo = this.aRouter.snapshot.paramMap.get('titulo');
     }

  ngOnInit(): void {
    this.getDirectores();
    this.getActores();
    this.getGeneros();
    this.cargar();
  }
  getDirectores() {
    this.servicio.getDirectores().subscribe((data) => {
      this.Directores = data.data;
    });
  }

  getActores() {
    this.servicio.getActores().subscribe((data) => {
      this.Actores = data.data;
    });
  }

  getGeneros() {
    this.servicio.getGenero().subscribe((data) => {
      this.Generos = data.data;
    });
  }

  cargar() {
    if (this.titulo !== null) {
      this.servicio.getPeliculaporTitulo(this.titulo).subscribe((response: any) => {
        const pelicula = response.data[0];

        if (pelicula && pelicula.anioLanzamiento) {

          const fechalanzamiento = formatDate(pelicula.anioLanzamiento, 'yyyy-MM-dd', 'en');

          this.form.setValue({
            titulo: pelicula.titulo,
            aniolanzamiento: fechalanzamiento,
            idDirector: pelicula.idDirector,
            idActor: pelicula.idActor,
            idGenero: pelicula.idGenero,
            sinopsis: pelicula.sinopsis,
            duracion: pelicula.duracion,
            imagen: pelicula.url
          });
        } else {
          console.error('La película no tiene la estructura esperada o no existe');
        }
      });
    }
  }

}
