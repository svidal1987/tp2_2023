import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp2_2023';

  isLogin = false
  localStorage: any;
  constructor(public auth: AuthService, public http: HttpClient){
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
        this.isLogin = true
      }
    })

    this.auth.user$.subscribe((authResult) => {
      const user = {
        firstName: authResult?.given_name,
        lastName: authResult?.family_name,
        username: authResult?.email,
      };
      
      // Enviar el objeto de usuario a tu API
      const url = 'https://ejemplo.com/api/endpoint';
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      this.http.post(url, user, { headers }).subscribe(
        (response: any) => {
          console.log('Solicitud exitosa', response);
        },
        (error: any) => {
          console.error('Error en la solicitud', error);
        }
      );
    });
  }

  ngOnInit() {
    this.guardarJsonEnLocalStorage();
  }

  guardarJsonEnLocalStorage() {
    const json = { nombre: 'Valentin', apellido: 'Longo' };
    this.localStorage.set('miJson', JSON.stringify(json));
  }
  login(){
    this.auth.loginWithRedirect()
  }
}

