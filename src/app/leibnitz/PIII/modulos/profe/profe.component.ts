import { Component, OnInit } from '@angular/core';
import { ProfeService } from './profe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profe',
  templateUrl: './profe.component.html',
  styleUrls: ['./profe.component.css']
})
export class ProfeComponent implements OnInit {
  title= "Este es la implementacion del profe"
  constructor(private service : ProfeService, private router: Router) { }
  data :any 
  error:any
  page:number=1
  previous:any
  next:any
  loading=false
  
  ngOnInit(): void {
    this.getData();
  }
  getData(){
  this.loading = true
  this.service.getPlanets(this.page).subscribe(
    response =>{
      this.loading=false
      this.data = response
      console.log(this.data)
      this.previous = this.data.previous!=null?null:""
      this.next = this.data.next!=null?null:""
    }, 
    error=>{
      
      this.loading=false
      this.error = error
    })
  }

  onNext(){
    this.page++
    this.getData()
  }
  onPrevious(){
    this.page--
    this.getData()
  }


  onEditPlanet(planet:any){
    let id = planet.url.replace("https://swapi.dev/api/planets/","").replace("/","")
    console.log(id)
    this.router.navigateByUrl('/profe/planeta/editar/'+id)
  }

  deletePlanet:any
  onDeletePlanet(planet:any){
    this.deletePlanet = planet
  }

}
