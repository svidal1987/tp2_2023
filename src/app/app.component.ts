import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp2_2023';
  isLogin = false
  constructor(public auth: AuthService, private http: HttpClient){
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
        (response) => {
          console.log('Solicitud exitosa', response);
        },
        (error) => {
          console.error('Error en la solicitud', error);
        }
      );
    });
  }

  login(){
    this.auth.loginWithRedirect()
  }
}