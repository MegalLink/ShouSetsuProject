export class Novela {
    id:string;
    nombre:string;
    fechaLanzamiento:string;
    autor:string
    enlace:Enlace[];
    descripción:string;
    estado:boolean; //Disponible o no 
    urlImagen:string;
  
  }
  interface Enlace{
      url:string;
      tipo:string;
      nombreServidor:string;
  }