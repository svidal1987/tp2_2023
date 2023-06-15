import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  json: any; // Variable para almacenar el JSON

  ngOnInit(): void {
    this.obtenerJsonDelLocalStorage();
  }

  obtenerJsonDelLocalStorage() {
    const jsonStr = localStorage.getItem('miJson');
    if (jsonStr !== null) {
      this.json = JSON.parse(jsonStr);
    }
  }
}
