import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Chart,registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-top-generos',
  templateUrl: './top-generos.component.html',
  styleUrls: ['./top-generos.component.css']
})
export class TopGenerosComponent implements OnInit {

  populares: any;
  ctx: any;
  ctxLabels: any;
  ctxData: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('https://api-gateway-eosin.vercel.app/estadisticas/generoTendencias').subscribe(data => {
      this.populares = data;
      this.ctxLabels =  this.populares.map((x: any) => x["Nombre"]);
      this.ctxData =  this.populares.map((x: any) => x["cantidadReproduccionesGenero"]);
      console.log(this.populares);

      this.ctx = document.getElementById('myChartTopGeneros');

  new Chart(this.ctx, {
    type: 'polarArea',
    data: {
      labels: this.ctxLabels,
      datasets: [{
        label: 'Visualizaciones',
        data: this.ctxData,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  })  
  }

}

