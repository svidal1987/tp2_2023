import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './leibnitz/PIII/generic/body/body.component';
import { HeaderComponent } from './leibnitz/PIII/generic/header/header.component';
import { Grupo1Component } from './leibnitz/PIII/modulos/grupo1/grupo1.component';
import { Grupo2Component } from './leibnitz/PIII/modulos/grupo2/grupo2.component';
import { Grupo3Component } from './leibnitz/PIII/modulos/grupo3/grupo3.component';
import { Grupo4Component } from './leibnitz/PIII/modulos/grupo4/grupo4.component';
import { Grupo5Component } from './leibnitz/PIII/modulos/grupo5/grupo5.component';
import { Grupo6Component } from './leibnitz/PIII/modulos/grupo6/grupo6.component';
import { HomeComponent } from './leibnitz/PIII/generic/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfeComponent } from './leibnitz/PIII/modulos/profe/profe.component';
import { CrearPlanetaComponent } from './leibnitz/PIII/modulos/profe/crear-planeta/crear-planeta.component';
import { EditarPlanetaComponent } from './leibnitz/PIII/modulos/profe/editar-planeta/editar-planeta.component';
import { FooterComponent } from './leibnitz/PIII/generic/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    Grupo1Component,
    Grupo2Component,
    Grupo3Component,
    Grupo4Component,
    Grupo5Component,
    Grupo6Component,
    HomeComponent,
    ProfeComponent,
    CrearPlanetaComponent,
    EditarPlanetaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
