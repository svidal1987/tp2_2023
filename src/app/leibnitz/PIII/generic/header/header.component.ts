import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  json: any; // Variable para almacenar el JSON

  constructor(private localStorage: LocalStorageService,
             public auth: AuthService) { }
  ngOnInit(): void {
    this.obtenerJsonDelLocalStorage();
  }

  obtenerJsonDelLocalStorage() {
    const jsonStr = this.localStorage.get('miJson');
    this.json = JSON.parse(jsonStr);
  }
  logOut(){
    this.auth.logout()
  }

}
