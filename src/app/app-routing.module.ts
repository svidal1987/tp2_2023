import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './leibnitz/PIII/generic/home/home.component';
import { Grupo1Component } from './leibnitz/PIII/modulos/grupo1/grupo1.component';
import { Grupo2Component } from './leibnitz/PIII/modulos/grupo2/grupo2.component';
import { Grupo3Component } from './leibnitz/PIII/modulos/grupo3/grupo3.component';
import { Grupo4Component } from './leibnitz/PIII/modulos/grupo4/grupo4.component';
import { Grupo5Component } from './leibnitz/PIII/modulos/grupo5/grupo5.component';
import { Grupo6Component } from './leibnitz/PIII/modulos/grupo6/grupo6.component';
import { ProfeComponent } from './leibnitz/PIII/modulos/profe/profe.component';
import { CrearPlanetaComponent } from './leibnitz/PIII/modulos/profe/crear-planeta/crear-planeta.component';
import { EditarPlanetaComponent } from './leibnitz/PIII/modulos/profe/editar-planeta/editar-planeta.component';

const routes : Routes = [
  {  path:'', redirectTo:'home', pathMatch:'full'},
  {  path:'home', component:HomeComponent},
  {  path:'grupo1', component:Grupo1Component},
  {  path:'grupo2', component:Grupo2Component},
  {  path:'grupo3', component:Grupo3Component},
  {  path:'grupo4', component:Grupo4Component},
  {  path:'grupo5', component:Grupo5Component},
  {  path:'grupo6', component:Grupo6Component},

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
