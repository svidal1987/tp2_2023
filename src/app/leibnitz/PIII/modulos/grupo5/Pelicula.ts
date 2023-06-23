export class Pelicula {
    Descripcion: string;
    ID: number;
    Nombre: string;
    

    constructor( Descripcion: string,ID: number, Nombre: string) {
        this.Descripcion = Descripcion;
        this.ID = ID;
        this.Nombre = Nombre;       
        
    }

    
}

interface ApiResponse {
    data: Pelicula[];
  }
