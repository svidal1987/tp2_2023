import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp2_2023';

  ngOnInit() {
    this.guardarJsonEnLocalStorage();
  }

  guardarJsonEnLocalStorage() {
    const json = { nombre: 'Valentin', apellido: 'Longo' };
    localStorage.setItem('miJson', JSON.stringify(json));
  }
}