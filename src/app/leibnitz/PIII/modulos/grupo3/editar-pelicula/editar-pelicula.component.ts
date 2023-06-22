import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  form: FormGroup;
  Directores: any[] = [];
  Actores: any[] = [];
  Generos: any[] = [];
  pelicula: any = {
    titulo: '',
    aniolanzamiento: '',
    Director: null,
    Actor: null,
    idDirector: 0,
    idActor: 0,
    idGenero: 0,
    sinopsis: '',
    duracion: '',
    url: ''
  };
  id: string | null;

  constructor(private servicio: PeliculasService,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder) { this.form = this.fb.group({
      titulo: [''],
      aniolanzamiento: [null],
      idDirector: [null],
      idActor: [null],
      idGenero: [null],
      sinopsis: '',
      duracion: '',
      imagen: ''
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');}

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
    if (this.id !== null) {
      this.servicio.getPelicula(this.id).subscribe((response: any) => {
        const pelicula = response.data[0];

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
      });
    }
  }
  editarPelicula() {
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
    if (this.id !== null) {
      this.servicio.updatePelicula(this.id, this.pelicula).subscribe(() => {
        console.log("La película se ha actualizado correctamente");
      })
    }
  }

}
