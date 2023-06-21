import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-grupo2',
  templateUrl: './grupo2.component.html',
  styleUrls: ['./grupo2.component.css']
})
export class Grupo2Component implements OnInit {

  constructor(public auth: AuthService, private http: HttpClient) { }
  user: any
  ngOnInit(): void {
    this.auth.user$.subscribe((authResult) => {
      const user = {
        firstName: authResult?.given_name,
        lastName: authResult?.family_name,
        username: authResult?.email,
      };
      
      // Enviar el objeto de usuario a tu API
      // const url = 'https://ejemplo.com/api/endpoint';
      // const headers = new HttpHeaders().set('Content-Type', 'application/json');

      // this.http.post(url, user, { headers }).subscribe(
      //   (response) => {
      //     console.log('Solicitud exitosa', response);
      //   },
      //   (error) => {
      //     console.error('Error en la solicitud', error);
      //   }
      // );

    });

    // this.auth.user$.subscribe((authResult) => {
    //   this.user = {
    //     firstName: authResult?.given_name,
    //     lastName: authResult?.family_name,
    //     username: authResult?.email,
    //   };
    // });
  }
}
