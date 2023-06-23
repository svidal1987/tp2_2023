export class Lista {
    Descripcion: string;
    ID: number;
    Nombre: string;
    UsuarioID: number = 0;

    constructor( Descripcion: string,ID: number, Nombre: string, UsuarioID: number) {
        this.Descripcion = Descripcion;
        this.ID = ID;
        this.Nombre = Nombre;       
        this.UsuarioID = UsuarioID;
    }

    
}

interface ApiResponse {
    data: Lista[];
  }
