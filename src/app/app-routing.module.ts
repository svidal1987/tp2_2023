import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './leibnitz/PIII/generic/home/home.component';
import { Grupo1Component } from './leibnitz/PIII/modulos/grupo1/grupo1.component';
import { Grupo2Component } from './leibnitz/PIII/modulos/grupo2/grupo2.component';
import { Grupo3Component } from './leibnitz/PIII/modulos/grupo3/grupo3.component';
import { CrearPeliculaComponent } from './leibnitz/PIII/modulos/grupo3/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './leibnitz/PIII/modulos/grupo3/editar-pelicula/editar-pelicula.component';
import { ConsultarPeliculaComponent } from './leibnitz/PIII/modulos/grupo3/consultar-pelicula/consultar-pelicula.component';
import { Grupo4Component } from './leibnitz/PIII/modulos/grupo4/grupo4.component';
import { Grupo5Component } from './leibnitz/PIII/modulos/grupo5/grupo5.component';
import { Grupo6Component } from './leibnitz/PIII/modulos/grupo6/grupo6.component';
import { ProfeComponent } from './leibnitz/PIII/modulos/profe/profe.component';
import { CrearPlanetaComponent } from './leibnitz/PIII/modulos/profe/crear-planeta/crear-planeta.component';
import { EditarPlanetaComponent } from './leibnitz/PIII/modulos/profe/editar-planeta/editar-planeta.component';

const routes : Routes = [
  {  path:'', redirectTo:'home', pathMatch:'full'},
  {  path:'home', component:HomeComponent},
  {  path:'user', component:Grupo2Component},
  {  path:'peliculas', component:Grupo3Component},
  {  path:'peliculas/pelicula/crear', component:CrearPeliculaComponent},
  {  path:'peliculas/pelicula/editar/:id', component:EditarPeliculaComponent},
  {  path:'peliculas/pelicula/consultar/:titulo', component:ConsultarPeliculaComponent},
  {  path:'estadisticas', component:Grupo4Component},
  {  path:'listadereproduccion', component:Grupo5Component},

  {  path:'profe', component:ProfeComponent},
  {  path:'profe/planeta/editar/:id}', component:EditarPlanetaComponent},
  {  path:'profe/planeta/crear', component:CrearPlanetaComponent},

  {  path:'**', redirectTo:'home', pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
