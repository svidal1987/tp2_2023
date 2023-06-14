import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  json: any; // Variable para almacenar el JSON

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.obtenerJsonDelLocalStorage();
  }

  obtenerJsonDelLocalStorage() {
    const jsonStr = this.localStorage.get('miJson');
    this.json = JSON.parse(jsonStr);
  }
}
