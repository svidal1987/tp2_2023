import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp2_2023';

  isLogin = false
  constructor(private localStorage: LocalStorageService,
             public auth: AuthService) {
      this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
        this.isLogin = true
      }
    })
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

