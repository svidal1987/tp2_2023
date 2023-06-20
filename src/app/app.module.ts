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

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { Top10Component } from './leibnitz/PIII/modulos/grupo4/top10/top10.component';
import { TopGenerosComponent } from './leibnitz/PIII/modulos/grupo4/top-generos/top-generos.component';
import { TendenciasComponent } from './leibnitz/PIII/modulos/grupo4/tendencias/tendencias.component';
import { TotalUsariosComponent } from './leibnitz/PIII/modulos/grupo4/total-usarios/total-usarios.component';
import { EstadisticasUsuarioComponent } from './leibnitz/PIII/modulos/grupo4/estadisticas-usuario/estadisticas-usuario.component';

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
    FooterComponent,
    Top10Component,
    TopGenerosComponent,
    TendenciasComponent,
    TotalUsariosComponent,
    EstadisticasUsuarioComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-g4llofp4fbls07nw.us.auth0.com',
      clientId: 'jswybq3M4ezletgJAwEsHQUs25OJt5ef',
      cacheLocation: "localstorage",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
