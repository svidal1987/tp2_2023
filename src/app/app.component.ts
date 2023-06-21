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
  booleanVariable: boolean = false;

  isLogin = false
  localStorage: any;
  user: any;
  json: any;
  constructor(public auth: AuthService, public http: HttpClient){
    this.booleanVariable = false;
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
        this.isLogin = true
      }
    })

    

    this.auth.user$.subscribe((authResult) => {
      const username = authResult?.email;
      const url = `https://api-gateway-eosin.vercel.app/usuario/${username}`;
      
      console.log("URL" + url)
      this.http.get(url).subscribe(
        (response: any) => {
          if (response.message === "usuario retrieved" && response.data.length > 0) {
            this.booleanVariable = true;
          } else {
            this.booleanVariable = false;
          }
        },
        (error: any) => {
          this.booleanVariable = false;
          console.error("Error en la solicitud:", error);
        }
      );
    });

  }

  ngOnInit() {
    this.guardarJsonEnLocalStorage();
  }

  guardarJsonEnLocalStorage() {
    const json = { nombre: 'Valentin', apellido: 'Longo' };
    localStorage.setItem('miJson', JSON.stringify(json));

    this.auth.user$.subscribe((authResult) => {
      const user = {
        nombre: authResult?.given_name,
        apellido: authResult?.family_name,
        username: authResult?.email,
      };
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    });
  }


  login(){
    this.auth.loginWithRedirect()
  }
}

