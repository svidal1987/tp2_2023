import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lista } from './Lista';
import { Data } from 'popper.js';
import Swal from 'sweetalert2';
import { empty } from 'rxjs';
import { Pelicula } from './Pelicula';

interface Usuario {
  ID: number;
  NombreUsuario: string;
  CorreoElectronico: string;
}



@Component({
  selector: 'app-grupo5',
  templateUrl: './grupo5.component.html',
  styleUrls: ['./grupo5.component.css']
})

export class Grupo5Component implements OnInit {

  ngOnInit(): void {
    this.getListasUsuario(2);
    this.getUsuarios();
  }
  data: any;
  selectedLista: Lista = new Lista("",0,"",0);
  selectedPelicula: Pelicula = new Pelicula("",0,"")
  constructor(private http: HttpClient) {}
  ListaArray: Lista[] = [];
  PeliculaArray: Pelicula[] = [];
  ListaauxiliarArray: Lista[] = [];
  usuarios: Usuario[] = [];
  comboUsuarios: any[] = [];

  

 
  Recargar(){
    this.getListasUsuario(2);
    this.selectedLista = new Lista("",0,"",0);
    var inputElement = document.getElementById('UsuarioIDInputText') as HTMLInputElement;
    var value = parseInt(inputElement.value);
    this.getListasUsuario(value);
    value = 0;
  }

  Busqueda(){
    Swal.fire({
      title: 'Buscar Nombre',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Buscar',
    }).then((result) => {
      if (result.isConfirmed) {
        let inputText = result.value;
        this.ListaauxiliarArray = this.ListaArray.filter(element => element.Nombre === inputText);
        if(this.ListaauxiliarArray.length === 0){
          Swal.fire({
            title: 'OOPS... no se encuentra esta Lista',
            text: 'recuerda que tiene que ser exacto',
            icon: 'error'       
          })

        }else{
          this.ListaArray = this.ListaArray.filter(element => element.Nombre === inputText);
        }
      }
    });
  }
  
  // getUsuarios() {
  //   const url = 'https://api-redes-usuarios-nachewien.vercel.app/api/usuario/ignaciogaraffini@gmail.com';
  //   this.http.get<Usuario[]>(url).subscribe(response => {
  //     this.usuarios = response;
      
  //   });
  // }

  getUsuarios() {
    const url = 'https://api-redes-usuarios-nachewien.vercel.app/api/usuario/ignaciogaraffini@gmail.com';
    this.http.get<any>(url).subscribe(response => {
      this.usuarios = response.data;
      console.log(response);
      this.comboUsuarios = this.usuarios.map(usuario => {
        return {
          value: usuario.ID,
          label: usuario.NombreUsuario
        };
      });
      console.log(this.comboUsuarios)
    });
  }
  

  getListasUsuario(idUsuario: number) {
    const url = `https://redespython.rj.r.appspot.com/getListasUsuario/${idUsuario}`;
    this.http.get<any>(url).subscribe(response => {
      console.log(response);
      this.ListaArray = response.map((item: {Descripcion: string; ID: number; Nombre: string; UsuarioID: number}) => 
      new Lista(item.Descripcion,item.ID,item.Nombre,item.UsuarioID)
      );
    });
  }

  getPeliculaUsuario(ID: number) {
    const url = `https://redespython.rj.r.appspot.com/getListasUsuario/${ID}`;
    this.http.get<any>(url).subscribe(response => {
      console.log(response);
      this.PeliculaArray = response.data.map((item: {Descripcion: string; ID: number; Nombre: string}) => 
      new Pelicula(item.Descripcion,item.ID,item.Nombre)
      );
    });
  }

 createLista(lista: Lista) {
  var inputElement = document.getElementById('UsuarioIDInputText') as HTMLInputElement;
  var value = parseInt(inputElement.value);
  const data = ({
    "Nombre": lista.Nombre,
    "Descripcion": lista.Descripcion,
    "UsuarioID": value 
  });
  console.log(data);
  debugger;
  this.http.post('https://redespython.rj.r.appspot.com/createLista', data).toPromise()
    .then(response => {
      //aca va un get lista
      var inputElement = document.getElementById('UsuarioIDInputText') as HTMLInputElement;
      var value = parseInt(inputElement.value);
      this.getListasUsuario(value);
      Swal.fire({
        title: 'Lista Añadido con Exito',
        text: 'ya puedes trabajar con el',
        icon: 'success'       
      })
    })
    .catch(error => {
      console.error('Ocurrió un error al hacer la solicitud:', error);
    });
}

 updateContacto(selectedLista: Lista, ID: number) {
  const data = ({
    "ID": selectedLista.ID,
    "Nombre": selectedLista.Nombre,
    "Descripcion": selectedLista.Descripcion
  });

  this.http.put(`https://redespython.rj.r.appspot.com/updateLista`, data).toPromise()
    .then(response => {
      var inputElement = document.getElementById('UsuarioIDInputText') as HTMLInputElement;
      var value = parseInt(inputElement.value);
      this.getListasUsuario(value);

      Swal.fire({
        title: 'Lista Modificada con Exito',
        text: 'ya puedes ver los cambios',
        icon: 'success'       
      })
    })
    .catch(error => {
      console.error('Ocurrió un error al hacer la solicitud:', error);
    });
  }


  deleteLista(selectedLista: Lista,id: number){
  id = selectedLista.ID;
  Swal.fire({
    title: 'Estas Seguro?',
    text: "Esta acción no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.delete(`https://redespython.rj.r.appspot.com/deleteLista/${id}`).toPromise()
    .then(response => {
      var inputElement = document.getElementById('UsuarioIDInputText') as HTMLInputElement;
      var value = parseInt(inputElement.value);
      this.getListasUsuario(value);

      Swal.fire(
        'Eliminada!',
        'La Lista se eliminó con Exito!',
        'success'
      )
    })
    .catch(error => {
      console.error('Ocurrió un error al hacer la solicitud:', error);
    });
    }})}

  Eliminar(){
  this.deleteLista(this.selectedLista,this.selectedLista.ID!);
  }
  

  addOrEdit() {
    if (this.selectedLista.ID === 0) {
     
      this.createLista(this.selectedLista);
    }else{
      this.updateContacto(this.selectedLista,this.selectedLista.ID!); 
    }
    this.selectedLista = new Lista("",0,"",0);
  }

  openForEdit(lista: Lista) {
    this.selectedLista = lista;
    debugger;
    console.log(lista);
    this.getPeliculaUsuario(lista.ID);
  }
  openForEditPelicula(pelicula: Pelicula) {
    this.selectedPelicula = pelicula;
    
  }

  
}