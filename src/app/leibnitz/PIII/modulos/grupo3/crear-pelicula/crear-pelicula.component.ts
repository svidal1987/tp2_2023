import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {
  form: FormGroup;
  Directores: any[] = [];
  Actores: any[] = [];
  Generos: any[] = [];
  pelicula: any = {
    titulo: "",
    aniolanzamiento: "",
    Director: null,
    Actor: null,
    idDirector: 0,
    idActor: 0,
    idGenero: 0,
    sinopsis: "",
    duracion: "",
    url: ""
  }

  constructor(private servicio: PeliculasService,
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
      })
     }

  ngOnInit(): void {
    this.getDirectores();
    this.getActores();
    this.getGeneros();
  }
  getDirectores() {
    this.servicio.getDirectores().subscribe(data => {
      this.Directores = data.data;
    });
  }

  getActores() {
    this.servicio.getActores().subscribe(data => {
      this.Actores = data.data;
    });
  }

  getGeneros() {
    this.servicio.getGenero().subscribe(data => {
      this.Generos = data.data;
    });
  }
  AgregarPelicula() {
    this.pelicula = {
      titulo: this.form.value.titulo,
      aniolanzamiento: this.form.value.aniolanzamiento,
      Director: null,
      Actor: null,
      idDirector: this.form.value.idDirector,
      idActor: this.form.value.idActor,
      idGenero: this.form.value.idGenero,
      sinopsis: this.form.value.sinopsis,
      duracion: this.form.value.duracion,
      url: this.form.value.imagen
    };

    this.servicio.createPelicula(this.pelicula).subscribe(
      response => {
        console.log('Película creada:', response);
      },
      error => {
        console.error('Error al crear la película:', error);
      }
    );
    this.form.reset();
  }

}
