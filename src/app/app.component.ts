import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp2_2023';

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.guardarJsonEnLocalStorage();
  }

  guardarJsonEnLocalStorage() {
    const json = { nombre: 'Valentin', apellido: 'Longo' };
    this.localStorage.set('miJson', JSON.stringify(json));
  }
}
