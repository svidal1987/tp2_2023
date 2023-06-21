import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Chart,registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
  populares: any;
  ctx: any;
  ctxLabels: any;
  ctxData: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('https://api-gateway-eosin.vercel.app/estadisticas/populares').subscribe(data => {
      this.populares = data;
      this.ctxLabels =  this.populares.map((x: any) => x["Titulo"]);
      this.ctxData =  this.populares.map((x: any) => x["cantidadReproducciones"]);
      console.log(this.populares);

      this.ctx = document.getElementById('myChart');

  new Chart(this.ctx, {
    type: 'bar',
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
